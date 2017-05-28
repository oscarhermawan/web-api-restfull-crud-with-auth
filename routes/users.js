const express = require('express')
const router = express.Router()
const api = require('../controllers/userController')
const jwt = require('../helper/jwt_validation')
var passport = require('passport')

router.get('/', jwt.verifyLogin, api.getAllUsers)
router.get('/:id', jwt.verifyLogin, api.getById)
router.post('/', api.insertUser)
router.delete('/:id', jwt.verifyLogin, api.deleteUser)

//login local
router.post('/signin', passport.authenticate('local', {session:false}), function(req,res){
  var user = req.user
  res.send(user)
})

module.exports = router
