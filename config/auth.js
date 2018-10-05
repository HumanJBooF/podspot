require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require("../models");

const configAuth = passport => {


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((user, done) => {
        db.User.find({
            where: {
                'googleID': user.id
            }
        })
        done(null, user.id);
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.PASSPORT_CLIENT_ID,
        clientSecret: process.env.PASSPORT_SECRET,
        callbackURL: process.env.PASSPORT_CALLBACKURL,
        passReqToCallback: true
    }, (req, accessToken, refreshToken, profile, done) => {
        // console.log(profile, "PROFILE PROFILE")
        // console.log(refreshToken, "REFRESH TOKEN")
        // console.log(accessToken, "ACCESS TOKEN")
        process.nextTick(() => {
            db.User.findOne({
                where: {
                    "googleID": profile.id
                }
            }, (err, user) => {
                console.log(`whats in this user ${user}`)
                if (user) {
                    return done(null, user);
                    // creates new user if user is null
                } else {
                    console.log(`ELSE ELSE ELSE`)
                    const newUser = new db.User();

                    newUser.googleID = profile.id;
                    newUser.displayName = profile.displayName;
                    newUser.emails = profile.emails[0].value;
                    newUser.photo = profile.photos[0].value;

                    // save the user
                    newUser.save((err) => {
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