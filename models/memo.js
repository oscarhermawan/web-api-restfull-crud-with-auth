const mongoose = require('mongoose')
var Schema = mongoose.Schema

var memoSchema = new Schema({
  memoFrom:{
    type: Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  isCompleted:{
    type:Boolean,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var Memo = mongoose.model('Memo', memoSchema)

module.exports = Memo
