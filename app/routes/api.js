var User = require('../models/user');
var Helpers = require('../helpers/email.js');

module.exports = function(router){
    router.post('/users', function(req, res) {
        var user = new User();
        user.email = req.body.email;
        user.password =  req.body.password;
        if(req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == ''){
            return res.status(400).send('Please provide an email and password: ');
        } else {
            user.save(function(err){
                if (err){
                    return res.status(400).send('That email is already being used!');
                } else {
                    Helpers.sendVerifcationEmail(user, function(eror){
                        if(eror){
                            return res.status(400).send('Error while creating account. Please try again later!');
                        } else {
                            return res.status(200).send('Account Created and Verification email has been sent. Please check your inbox and verify your email!');          
                        }
                    })
                }
            });
        }
    });
    router.post('/authenticate', function(req,res){
        User.findOne({email: req.body.email}).select('email password verified').exec(function(err,user){
            if (err) throw err;
            if (!user)  {
                res.json({sucess: false, message: 'Could not authenticate the User'});
            } else if(!user.verified) {
                res.json({sucess: false, message: 'Please verify your account first!'});         
            } else if (user) {
                if (req.body.password){
                    var validPassword = user.comparePassword(req.body.password);
                } else{
                    res.json({sucess: false, message: 'No password'});
                }
                if (!validPassword){
                    res.json({sucess: false, message: 'Could not authenticate the password'});
                } else {
                    res.json({sucess: true, message: 'Authenticated!', email: user.email});
                }
            }
        });
        });
    
    router.get('/verify_email', function(req, res){
        let token = req.query.token;
        User.findOne({token: req.query.token}, function(err, user){
            if(err){
                res.redirect('/login');
            } else {
                User.update({ token: req.query.token}, {
                    verified: true
                    //token: null
                }, function(err, updated){
                    if(!err){
                        res.redirect('/login?verification_success=1');
                    } else {
                        res.redirect('/login');
                    }
                });
            }
        });
    });

    return router;
}