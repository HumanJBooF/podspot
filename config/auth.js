require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const dB = require("../models/users.js");

const configAuth = passport => {


    passport.serializeUser(function (user, done) {
        // done(null, user.id);
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        // Users.findById(obj, done);
        done(null, obj);
    });

    passport.use(new GoogleStrategy(
        // Use the API access settings stored in ./config/auth.json. You must create
        // an OAuth 2 client ID and secret at: https://console.developers.google.com
        {
            // clientID: process.env.PASSPORT_CLIENT_ID,
            // clientSecret: process.env.PASSPORT_SECRET,
            // callbackURL: process.env.PASSPORT_CALLBACKURL,
            clientID:"880300718600-5k6a3ithtblbv1msidetufni0tas64a1.apps.googleusercontent.com",
            clientSecret:"-MHupsr0aRNrKxTBaYL8P2b-",
            callbackURL:"http://localhost:3000/auth/google/callback",
            passReqToCallback: true
        },

        function (accessToken, refreshToken, Users, done) {
            process.nextTick(function () {
                dB.findOne({ "google.id": Users.id }, function (err, user) {
                    if (err)

                        return done(err);
                    // checks for user
                    if (user) {
                        return done(null, user);
                        // creates new user if user is null
                    } else {
                        const newUser = new dB();

                        newUser.google.id = Users.id;
                        newUser.google.token = token;
                        newUser.google.name = Users.displayName;
                        newUser.google.email = Users.emails[0].value; // pull the first email

                        // save the user
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                })
            })
        }
    ));
}
module.exports = configAuth;