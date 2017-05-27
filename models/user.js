const mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  memo:[{
    type: Schema.Types.ObjectId,
    ref:'Memo'
  }],
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
