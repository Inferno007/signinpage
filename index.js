var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/login_app');
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static('public'));


var loginSchema = new mongoose.Schema({
    username:String,
    password:String
});

var Login = mongoose.model('Login',loginSchema);

app.get('/login.html',function(req,res){
    res.sendFile(__dirname+'/public/login.html');
})

app.post('/addFriend',function(req,res){
    var userName = req.body.username;
    var Password = req.body.password;
    var some = new Login({
        username: userName,
        password:Password
    });
    console.log(userName);
    console.log(Password);
    some.save(function(err,login){
        if(err){
            console.log("ERRORR");
            console.log(err);
        }
        else{
            console.log(login);
        }
    });
    res.send("Youve reached the post route");
})

app.get('/c.css',function(req,res){
    res.sendFile(__dirname+'/public/c.css');
})

app.get('/signup.html',function(req,res){
    res.sendFile(__dirname+'/public/signup.html');
})

/*app.get('/',function(req,res){
    res.sendFile(__dirname + '/login.html');
})

app.get('/c.css',function(req,res){
    res.sendFile(__dirname+'/c.css');
})*/


app.listen(3000,function(){
    console.log("server is listening")
})