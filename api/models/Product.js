const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Product = new Schema({  
  FullName: {  
    type: String  
  },  
  Adress: {  
    type: String  
  },  
  Zipcode: {  
    type: Number  
  },
  Mobile_Number:{
    type:Number
  },
  Username:{
    type:String
  },
  Password:{
    type:String
  }
},{  
    collection: 'shree'  
});  
module.exports = mongoose.model('Product', Product);  