var Memo = require('../models/memo')
const methods = {}

//GET ALL MEMOS
methods.getAllMemos = function(req, res) {
  Memo.find(function(err, result) {
    if(err){
      res.send(err);
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
    memoFrom:req.body.iduser,
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

//UPDATE MEMO
methods.updateMemo = function(req,res){
  Memo.findById(req.params.id, function(error, result){
    if(error){
      res.send(error)
    } else {
      var memoUpdate = {
        memoFrom:result.iduser,
        title:req.body.title || result.title,
        description:req.body.description || result.description,
        isCompleted : req.body.isCompleted || result.isCompleted
      }
      console.log('memoUpdate',memoUpdate);
      Memo.findByIdAndUpdate(req.params.id, memoUpdate, function(err, resultupdate){
        if(!err){
          res.send(resultupdate)
        } else {
          res.send(err)
        }
      })
    }
  })
}//GET ONE BY ID



//DELETE MEMO
methods.deleteMemo = function(req,res) {
  Memo.findById(req.params.id, function(error, result){
    if(!error){
      if(result.memoFrom == req.body.iduser){
        Memo.findByIdAndRemove(req.params.id, function(err, result){
          if(!err){
            res.send(result)
          } else {
            res.send(err)
          }
        })
      } else {
        res.send("Tidak Sesuai Akses")
      }
    } else {
      res.send(error)
    }
  })
}//DELETE MEMO

module.exports = methods
