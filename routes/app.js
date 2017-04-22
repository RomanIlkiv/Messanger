var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

// Old trainings code
/*router.get('/', function (req, res, next) {
    User.findOne({}, function (err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    console.log(User);
    var user = new User({
        firstName: 'Roman',
        lastName: 'Ilkiv',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});*/

module.exports = router;
