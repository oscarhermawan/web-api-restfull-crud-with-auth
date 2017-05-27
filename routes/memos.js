const express = require('express')
const router = express.Router()
const api = require('../controllers/memoController')

router.get('/', api.getAllMemos)
router.get('/:id', api.getById)
router.post('/', api.insertMemo)
// router.put('/:id', api.editMemo)
router.delete('/:id', api.deleteMemo)

module.exports = router
