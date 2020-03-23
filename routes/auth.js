var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
var db = require('../db/db');
const bcrypt = require('bcrypt');


module.exports = function (passport) {
  router.get('/login', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/auth/login_process" method="post">
        <p><input type="text" name="email" placeholder="username"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
    `, '');
    response.send(html);
  });
  router.post('/login_process',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
      failureFlash: true,
      successFlash: true
    }));

  router.get('/logout', function (request, response) {
    request.logout();
    request.session.save(function () {
      response.redirect('/');
    });
  });

  router.get('/register', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }
    var title = 'WEB - register';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/auth/register_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd1" placeholder="password"></p>
        <p><input type="password" name="pwd2" placeholder="password"></p>
        <p><input type="text" name="username" placeholder="username"></p>
        <p>
          <input type="submit" value="register">
        </p>
      </form>
    `, '');
    response.send(html);
  });
  router.post('/register_process', function(request, response) {
    var post=request.body;
    var email=post.email;
    var pwd1=post.pwd1;
    var pwd2=post.pwd2;
    var username=post.username;

    if (pwd1 !== pwd2) {
      request.flash('error', 'Passwords must be same!');
      response.redirect('/auth/register');
    }

  // Database now stores logins correctly with hashed password
   else {
	   bcrypt.hash('^pep@'+pwd1, 10, function(err, hash){
		   //console.log(`Hash: ${hash}`);
		   // Store hash in your password DB.
		   db.run("INSERT INTO user(username, password, email) VALUES('" +username+ "', '" +hash+ "', '" +email+ "');", function(err) {
			if (err) { 
			return console.error(err.message);
			}
		})
		});
	   
	  //req.login();  
	  response.redirect('/')
		}
			   
   });




  return router;
}