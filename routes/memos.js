const express = require('express')
const router = express.Router()
const api = require('../controllers/memoController')
const jwt = require('../helper/jwt_validation')

router.get('/', jwt.verifyLogin, api.getAllMemos)
router.get('/:id', jwt.verifyLogin, api.getById)
router.post('/', jwt.verifyLogin, api.insertMemo)
router.put('/:id', jwt.verifyLogin, api.updateMemo)
router.delete('/:id', jwt.verifyLogin, api.deleteMemo)

module.exports = router
