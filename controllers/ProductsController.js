var Controller = require('./base/Controller')
var Product = require('../models/Product')

module.exports = new class ProductsController extends Controller {
    index(req, res, next) {
        Product.find((err, products) => {
            if (err) {
                res.send({
                    'success': false,
                    'message': 'An error was ocurred'
                })
            }
            res.send({
                'success': true,
                'data': {
                    'products': products
                }
            })
        })
    }

    save(req, res, next) {
        var body = req.body
        let files = req.files

        /*
        req.files.forEach((file) => {
            console.log(file.originalname)
        }) 
        */

        res.send({
            'success': true,
            'data': {
            }
        })
        /* var form = new formidable.IncomingForm();

        form.parse(req, (err, fields = [], files = []) => {
            if (err) throw err

            let originals = [];
            for (let file in files) {
                let media = {
                    'name': files[file].name,
                    'extension': files[file].name.split('.')[files[file].name.split('.').length - 1],
                    'type': files[file].type,
                }
                originals.push(media)
            }

            let product = new Product({
                name: fields.name,
                description: fields.description,
                medias: {
                    original: originals
                }
            });

            product.save((err, product) => {
                if (err) throw err
                res.send({
                    'success': true,
                    'data': {
                        'product': product
                    }
                })
            })
        }) */

    }
}