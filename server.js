var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/client'));
app.use('/api', appRoutes);


//Database Config
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://admin:admin44@ds229465.mlab.com:29465/studyspotsusers', { useNewUrlParser: true }, function(err){
    if (err) {
        console.log("Not connected to DB: " + err);
    } else {
        console.log("Connected to the DB")
    }
});


app.get('*', function(req,res) {
    return res.sendFile(path.join(__dirname + '/client/app/views/index.html'));
});

app.listen(port, function() {
    console.log('Server is running on port '+ port )
});