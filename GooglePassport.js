"use strict";
exports.__esModule = true;
var googleOauth2_1 = require("./googleOauth2");
var passport = require('passport');
var UserModel = require('./model/UserModel');
var GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;
// Creates a Passport configuration for Google
var GooglePassport = /** @class */ (function () {
    function GooglePassport(users) {
        this.clientId = googleOauth2_1["default"].id;
        this.secretId = googleOauth2_1["default"].secret;
        this.isAzure = process.env.HOST ? true : false;
        this.Users = users;
        console.log("Users " + this.Users);
        // this.host = this.isAzure ? process.env.HOST : "localhost";
        // this.port = this.isAzure ? process.env.PORT : 8080
        this.callbackPrepend = this.isAzure ?
            "https://rrwebappsu.azurewebsites.net" : "http://localhost:8080";
        //
        // this.callbackPrepend = "https://rrwebappsu.azurewebsites.net";
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: this.callbackPrepend + "/auth/google/callback",
            users: this.Users
            //                profileFields: ['id', 'displayName', 'emails']
        }, function (accessToken, refreshToken, profile, done) {
            console.log("inside new password google strategy");
            console.log("UserModel " + JSON.stringify(users));
            users.model.findOne({ userId: profile.id }).then(function (currentUser) {
                if (currentUser) {
                    console.log("we already have a record with the given profile ID");
                    //if we already have a record with the given profile ID
                    done(null, currentUser);
                }
                else {
                    console.log("Create user");
                    //if not, create a new user
                    var jsonObj = {
                        userId: profile.id,
                        email: profile.emails[0].value,
                        photoUrl: profile.photos[0].value,
                        fname: profile.givenName,
                        lname: profile.familyName,
                        loginType: 'Google',
                        lastLogin: new Date()
                    };
                    users.model.create([jsonObj]).then(function (newUser) {
                        done(null, newUser);
                    });
                }
            });
            process.nextTick(function () {
                console.log('validating google profile:' + JSON.stringify(profile));
                console.log("userId:" + profile.id);
                console.log("displayName: " + profile.displayName);
                console.log("retrieve all of the profile info needed");
                // this.email = profile.emails[0].value;
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            console.log('Called passport.serializeUser');
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            var id = user.id;
            console.log('Passport query single user with id: ' + id);
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
