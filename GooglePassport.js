"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleOauth2_1 = require("./config/googleOauth2");
let passport = require('passport');
let UserModel = require('./model/UserModel');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;
// Creates a Passport configuration for Google
class GooglePassport {
    constructor(users, savedList) {
        this.clientId = googleOauth2_1.default.id;
        this.secretId = googleOauth2_1.default.secret;
        this.Users = users;
        this.callbackPrepend = "https://rrwebappsu.azurewebsites.net"; //"http://localhost:8080";
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: this.callbackPrepend + "/auth/google/callback",
            users: this.Users
        }, (accessToken, refreshToken, profile, done) => {
            console.log("inside new password google strategy");
            users.model.findOne({ userId: profile.id }).then((currentUser) => {
                if (currentUser) {
                    console.log("we already have a record with the given profile ID");
                    //if we already have a record with the given profile ID
                    done(null, currentUser);
                }
                else {
                    console.log("Create user");
                    //if not, create a new user

                    var newUser = {
                        userId: profile.id,
                        email: profile.emails[0].value,
                        photoUrl: profile.photos[0].value,
                        fname: profile.givenName,
                        lname: profile.familyName,
                        loginType: 'Google',
                        lastLogin: new Date()
                    };

                    var newSavedList = {
                        userId: profile.id,
                        favorites: [
                            {
                                restaurantId: 1
                            }
                        ],
                        blocked: [
                            {
                                restaurantId: 2
                            }
                        ],
                        history: [
                            {
                                restaurantId: 3
                            }
                        ]
                    };

                    users.model.create([newUser]).then((newUser) => {
                        savedList.model.create([newSavedList]).then((newList) => {
                            done(null, newUser);
                        });
                    });
                }
            });
            process.nextTick(() => {
                return done(null, profile);
            });
        }));

        passport.serializeUser(function (user, done) {
            console.log('Passport.serializeUser called');
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            var id = user.id;
            console.log('Passport.deserializeUser user with id: ' + id);
            done(null, user);
        });
    }
}
exports.default = GooglePassport;
