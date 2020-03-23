const db = require('../db/db');
var bcrypt = require('bcrypt');

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
        console.log('passport.serializeUser')
        console.log('Serialize User', user)
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        console.log('passport.deserializeUser')
        console.log(id)
        db.get('SELECT id, username FROM user WHERE id = ?', id, function(err, row) {
            if (!row) return done(null, false);
            return done(null, row);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pwd'
    },
        function (username, password, done) {
            db.get('SELECT * FROM user WHERE username = ?', username, function(err, row) {
                if (!row) {
                    return done(null, false, { message: 'Incorrect username'});
                }

                if (bcrypt.compareSync('^pep@'+password, row.password)) {
                    return done(null, row);
                } else {
                    return done(null, false, {message: 'Incorrect username or password'});
                }
            })
        }
    ));
    return passport;
}