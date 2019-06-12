var express = require('express')
var router = express.Router()
var multer = require('multer')

const upload = multer()

var ProductsController = require('../controllers/ProductsController')

/* GET users listing. */
router.get('/', function (req, res, next) { ProductsController.index(req, res, next) })

router.post('/', [upload.array('files', 3, upload.none())], function (req, res, next) { ProductsController.save(req, res, next) })

module.exports = router
