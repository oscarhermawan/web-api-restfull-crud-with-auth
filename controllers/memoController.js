var Memo = require('../models/memo')
const methods = {}

//GET ALL MEMOS
methods.getAllMemos = function(req, res) {
  Memo.find(function(err, result) {
    if(err){
      console.log(err);
    } else {
      res.send(result)
    }
  })
}//GET ALL MEMOS

//GET ONE BY ID
methods.getById = function(req,res){
  Memo.findById(req.params.id, function(error, result){
    if(error){
      res.send(error)
    } else {
      res.send(result)
    }
  })
}//GET ONE BY ID

//INSERT MEMO
methods.insertMemo = function(req, res){
  var memoInput = new Memo({
    title:req.body.title,
    description:req.body.description,
    isCompleted : false
  })
  memoInput.save(function(err,result){
    if(err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
}//INSERT MEMO

//DELETE USER
methods.deleteMemo = function(req,res) {
  Memo.findByIdAndRemove(req.params.id, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}//DELETE USER

module.exports = methods
