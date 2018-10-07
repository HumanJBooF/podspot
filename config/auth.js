require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require("../models");

const configAuth = passport => {


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
            //Check the database for the googleID to match googles profile id
            db.User.findOne({
                where: {
                    "googleID": profile.id
                }
            }).then((user) => {

                console.log(`IS THERE A USER ===> ${user}`); // if there is a user in the database already it will be logged, if not it will be null
                if (user) {
                    return done(null, user);
                    // creates new user if user is null
                } else {

                    const newUser = new db.User();

                    newUser.googleID = profile.id;
                    newUser.displayName = profile.displayName;
                    newUser.emails = profile.emails[0].value;
                    newUser.photo = profile.photos[0].value;

                    console.log(`CREATED A NEW USER ===> ${newUser}`);
                    // save the user
                    newUser.save((err) => {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            }).catch(err => {
                console.log(`ERROR ERROR:::: ${err}`)
            })
        })
    }
    ));

    passport.serializeUser((user, done) => {
        console.log(`WHO IS THE USER ===> ${user.displayName}`)
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        db.User.findOne({
            where: {
                "googleID": id
            }
        }).then(user => {
            console.log(`DESERIALIZED!`)
            done(null, user);
        }).error(err => {
            done(err, null);
        });
    });
}
module.exports = configAuth;