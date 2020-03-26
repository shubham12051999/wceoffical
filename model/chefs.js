


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
  