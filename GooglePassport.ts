import googleAppAuth from './googleOauth2';
import * as os from "os";

let passport = require('passport');
//let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    clientId: string;
    secretId: string;
    host: string;
    port: string;
    callbackPrepend: string;
    private isAzure: boolean;

    constructor() {
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        this.isAzure = process.env.HOST ? true : false;
        // this.host = this.isAzure ? process.env.HOST : "localhost";
        // this.port = this.isAzure ? process.env.PORT : 8080

        this.callbackPrepend = this.isAzure ?
            "https://rrwebappsu.azurewebsites.net" : "http://localhost:8080";

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: this.callbackPrepend + "/auth/google/callback"
//                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("inside new password google strategy");
                process.nextTick(() => {
                    console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("userId:" + profile.id);
                    console.log("displayName: " + profile.displayName);
                    console.log("retrieve all of the profile info needed");
                    // this.email = profile.emails[0].value;
                    return done(null, profile);
                });
            }
        ));

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}

export default GooglePassport;
