
var auth=require('firebase-auth');
const { Storage } = require("@google-cloud/storage");
const {Firestore} = require('@google-cloud/firestore');
const path = require("path");
var fs = require('fs');
var bcrypt=require('bcryptjs');
// Create a new client
const firestore = new Firestore();
var admin = require("firebase-admin");
const firebase=require('firebase');
// const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
// Required for side-effects
var serviceAccount = require("../service.json");
//creating the firebase app and connecting to cradentials
firebase.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ngotiffin.firebaseio.com",
  apiKey: 'AIzaSyDN1JQ30B6HJkq855xnSwAlIwTVLBQ2BaE',
  authDomain: 'firebaseio.com',
  projectId: 'ngotiffin',
  storageBucket:'gs://ngotiffin.appspot.com'
});
const gc = new Storage({
  keyFilename: path.join("ss.json"),
  projectId: 'ngotiffin'
});
const bucket = gc.bucket("ngotiffin.appspot.com");
var db = firebase.firestore();

module.exports.createuser = function(newuser){
    email=newuser.email;
    password=newuser.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
      db.collection("userregistation").add(newuser);
        console.log("sucessfully created");     
        // callback=true;
      });
}

module.exports.getUserbyId=function(id,callback){
  console.log(id);
    var usr = db.collection("useregistation");
    var query = usr.where('id', '==',id);
    query.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
    return callback(doc);
   });   
})
}

module.exports.getUserbyUsername=  function(username,callback){
  var usr = db.collection("userregistation"); 
    var query = usr.where("email", "==",username); 
    query.get().then( function (querySnapshot) {
      querySnapshot.forEach(function(doc) {   
    callback(doc);
  })
})
.catch(function(err){
   console.log(err)  ;
})
}

module.exports.comparepassword=function(password,user,callback){
  hash=user.data().password;
    bcrypt.compare(password, hash, function(err,ismatch) {
      console.log(ismatch);
        callback(null,ismatch);
        console.log('sucesssfully done');
    });
}




module.exports.fetchchefdata=function(email,callback){
  var usr = db.collection("ngoregistation");
  var query = usr.where("email", "==",email);
  // console.log('got the zipcode',zipcode);
  query.get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    return callback(doc.data());
  });
  });
  }  
module.exports.fetchchef=function(user,callback){
  var chef=[]
  var zipcode=user.data().zipcode;
  var usr = db.collection("ngoregistation");
var query = usr.where("zipcode", "==",zipcode);
console.log('got the zipcode',zipcode);
query.get().then(function (querySnapshot) {
querySnapshot.forEach(function (doc) {
  // console.log(doc.data());
  //  var callback=doc.data();
    chef.push(doc.data());
  
});
});return callback(chef);

}
