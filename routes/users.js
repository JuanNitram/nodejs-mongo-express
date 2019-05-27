var express = require('express')
var router = express.Router()

var UsersController = require('../controllers/UsersController')

/* GET users listing. */
router.get('/', function(req, res, next) { UsersController.index(req, res, next) })

router.post('/', function(req, res, next){ UsersController.save(req, res, next) })

module.exports = router
