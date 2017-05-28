var User = require('../models/user')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')
const methods = {}

//GET ALL USER
methods.getAllUsers = function(req, res) {
  User.find(function(err, result) {
    if(err){
      res.send(err);
    } else {
      res.send(result)
    }
  })
}//GET ALL MEMOS

//GET ONE BY ID
methods.getById = function(req,res){
  User.findById(req.params.id, function(error, result){
    if(error){
      res.send(error)
    } else {
      res.send(result)
    }
  })
}//GET ONE BY ID

//INSERT USER
methods.insertUser = function(req, res){
  var userInput = new User({
    username:req.body.username,
    password:passwordHash.generate(req.body.password),
    name : req.body.name
  })
  userInput.save(function(err,result){
    if(err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
}//INSERT USER

//DELETE USER
methods.deleteUser = function(req,res) {
  User.findByIdAndRemove(req.params.id, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}//DELETE USER

// methods.pushMemo = function(req,res){
//   User.findById(req.params.id, function(err, result){
//     if(!err){
//       result.memo.push(req.body.idmemo)
//       let updateUser = {
//         username:result.username,
//         password:result.password,
//         name:result.name,
//         memo:result.memo
//       }
//       User.findByIdAndUpdate(req.params.id, updateUser, {new:true}, function(error, data){
//         if(!error){
//           res.send(data)
//         } else {
//           res.send(error)
//         }
//       })
//     } else {
//       res.send(err)
//     }
//   })
// User.findById(req.params.id,
//   {$push: {"memo": req.body.memo}},
//       {safe: true, upsert: true, new : true},
//       function(err, model) {
//           console.log(err);
//       })
// }

//LOCAL LOGIN
methods.signIn = function (username, password, next) {
  var getUser = User.findOne({username : username})
  getUser.exec(function(err, user){
    if(passwordHash.verify(password, user.password)){
      let User = {
        id:user.id, // TERNYATA BISA user.id / user._id di mongoose
        username:user.username,
        name:user.name
      }
      let token = jwt.sign(User, 'secret')
       next(null, {message: 'Berhasil Login', token })
    } else {
      next(null, {message: 'Password Salah'})
    }
  })
}//LOCAL LOGIN

module.exports = methods
