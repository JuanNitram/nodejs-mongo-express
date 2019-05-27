var express = require('express')
var router = express.Router()

var ProductsController = require('../controllers/ProductsController')

/* GET users listing. */
router.get('/', function(req, res, next) { ProductsController.index(req, res, next) })

router.post('/', function(req, res, next){ ProductsController.save(req, res, next) })

module.exports = router
