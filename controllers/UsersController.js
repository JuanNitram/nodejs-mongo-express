var Controller = require('./base/Controller')
var User = require('../models/User')

module.exports = new class UsersController extends Controller {
    index(req, res, next) {
        User.find((err, users) => {
            if (err) {
                res.send({
                    'success': false,
                    'message': 'An error was ocurred'
                })
            }
            res.send({
                'success': true,
                'data': {
                    'users': users
                }
            })
        })
    }

    save(req, res, next) {
        var body = req.body

        res.send({
            'success': true,
            'data': {
                'user': body
            }
        })
        /* var form = new formidable.IncomingForm();

        form.parse(req, (err, fields = [], files = []) => {
            if(err) throw err
            let user = new User ({
                name: fields.name,
                surname: fields.surname,
                email: fields.email,
            });
            user.save((err, user)=> {
                if(err) throw err
                res.send({
                    'success' : true,
                    'data' : {
                        'user' : user
                    }
                })
            })
        }) */
    }
}