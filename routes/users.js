const express = require('express')
const router = express.Router()
const api = require('../controllers/userController')
var passport = require('passport')

router.get('/', api.getAllUsers)
router.get('/:id', api.getById)
router.post('/', api.insertUser)
// router.put('/:id', api.editUser)
router.post('/:id/memo', api.pushMemo)
router.delete('/:id', api.deleteUser)

//login local
router.post('/signin', passport.authenticate('local', {session:false}), function(req,res){
  var user = req.user
  res.send(user)
})

module.exports = router
