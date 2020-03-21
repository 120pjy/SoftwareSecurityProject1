const db = require('../db/db');

module.exports = function (app) {

    /*var authData = {
        email: '120pjy@gmail.com',
        password: '111111',
        nickname: '120pjy'
      };*/

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.log('Serialize User', user);
        done(null, user.id);
    });

    passport.deserializeUser(function (user, done) {
        var user = //get user from db by id;
        console.log('deserialize user', user);
        done(null, user.id);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (username, password, done) {
            var user; //find user from db with matching username and password
            if (user) {
                return done(null, user, {
                    message: 'Welcome.'
                })
            } else {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
        }
    ));
    return passport;
}