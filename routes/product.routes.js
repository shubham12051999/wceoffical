var express = require('express');
var router = express.Router();
var User=require('../model/user')
// var Chefs=require('../model/chefs')
router.use(express.static("public"));
// var bcrypt=require('bcryptjs');

var chef=[];
var user=[];
router.get('/usereg', function(req, res, next) {
  res.render("usereg");
});
router.get('/userlogin', function(req, res, next) {
  res.render("userlogin");
});

router.get('/afulogin',function(req,res,next){
    res.render("afulogin")
});

router.get('/logout', function(req, res, next) {

  res.render("userlogin");

});

router.post("/ulogin", function(req, res) {
  password = req.body.password
  username = req.body.username
  User.getUserbyUsername(username,function(user){
    if(!user){console.log('unknown user');
      return done(null,false,{message:'invalid username'});
    }
    User.comparepassword(password,user,function(err,ismatch){
      if(err) return done(err);
      if(ismatch) {
        return user}
      else{console.log('wrong password')
        return null;
      }
      
    });
    User.fetchchef(user,function(data){
       chef=data;
    });
  });
  console.log('logged in');
    req.flash('sucess','ur now login');
    if(chef==null || user==[]){
      res.redirect("/users/userlogin")
    }
    // console.log(chef,"*******************",user)
    res.render('afulogin',{chef:chef,user:username});
  });


router.post('/ureg' ,function(req, res,next){
  // console.log(req.file);
  if(req.body.password==req.body.confpass){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
         pass=hash;
    var newuser=({
      First_Name: req.body.fname,
      Last_Name: req.body.lname,
      Gender:req.body.gender,
      DOB:req.body.DOB 	,
      email: req.body.email,
      phone_no:req.body.mobno,
       adress1:req.body.add1,
       adress2:req.body.add2,
       city:req.body.city,
       state:req.body.state,
       zipcode:req.body.pincode,
       password:req.body.pass,
    });
    User.createuser(newuser,function(err){
      if(err)throw err;
    });
  });
});}
  req.flash('sucess','you are sucessfully registered please login using ur id and password');
  res.render("userlogin");
});


router.get("/chefinfo/:email", function(req,res){
  var email = req.params.email;
    User.fetchchefdata(email,function(callback){
     imgs=callback.image;
     tables=callback.timetable;
     name=callback.First_Name+' '+callback.Last_Name;
     cost=callback.price;
     adress2=callback.adress2;
      res.render("chefinfo" ,{campground:imgs,table:tables,name:name,cost:cost,adress:adress2});
    });
  });



module.exports = router;
