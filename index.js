var express = require('express');

//var path = require('path');
//var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var User = require('./models/user');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//mongoose.connect('mongodb://localhost:27017/login_app');
//mongoose.connect('mongodb://localhost:27017/signup_app');
mongoose.connect('mongodb://localhost:27017/auth_demo_app');

var app = express();
app.use(express.static(__dirname));


app.use(bodyParser.urlencoded({extended:true}));
app.use(require('express-session')({
	secret:"Some text for hashing",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//app.use(express.static('public'));
/*var loginSchema = new mongoose.Schema({
    username:String,
    password:String
});

var Login = mongoose.model('Login',loginSchema);

var signupSchema = new mongoose.Schema({
    username :String,
    email : String,
    password : String
});

var Signup = mongoose.model('Signup',signupSchema);*/

/*app.post('/login',function(req,res){
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
})*/

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/home.html');
})

app.get('/secret',isLoggedIn,function(req,res){
    res.sendFile(__dirname+'/public/secret.html');
})

app.get('/signup.html',function(req,res){
    res.sendFile(__dirname+'/public/signup.html');
})

app.post('/register',function(req,res){
    /*var userName = req.body.username;
    var Email = req.body.email;
    var Password = req.body.password;

    var some1= new Signup({
        username:userName,
        email:Email,
        password:Password
    })

    console.log(userName);
    console.log(Email);
    console.log(Password);
    some1.save(function(err,signup){
        if(err){
            console.log("Error in posting data of signup form");
            console.log(err);
        }
        else{
            console.log(signup);
        }
    })*/
    req.body.username;
    req.body.email;
    req.body.password;
    User.register(new User({username:req.body.username,email:req.body.email}),req.body.password,function(err,user){
        if(err){
            console.log("error");
			console.log(err);
			return res.sendFile(__dirname+'/public/signup.html');
        }
       // console.log(user);
        passport.authenticate("local")(req,res,function(){
            res.sendFile(__dirname+'/public/secret.html');
        })
    })
    //res.send("You've reached the post route of signup ");
});

app.get('/login.html',function(req,res){
    res.sendFile(__dirname+'/public/login.html');
});

app.post('/login',passport.authenticate("local",{
	successRedirect : '/secret',
	failureRedirect : '/login',
}),function(req,res){
});

app.get('/logout.html',function(req,res){
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/login.html');
}

app.get('/c.css',function(req,res){
    res.sendFile(__dirname+'/public/c.css');
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