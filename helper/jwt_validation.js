
var jwt = require('jsonwebtoken')
const methods = {}

methods.verifyLogin = function(req,res, next){
  jwt.verify(req.headers.token, 'secret', function(err, decoded){
    if(!err){
      if(decoded.username){
        req.body.iduser = decoded.id
        next()
      }
      else{
        res.send('Anda Tidak punya Akses')
      }
    }
    else {
      res.send(err)
    }
  })
}

module.exports = methods
