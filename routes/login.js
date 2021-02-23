const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainCtrl')

router.post('/', mainController.login)

module.exports = router