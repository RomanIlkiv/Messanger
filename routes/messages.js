var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    Message.find()
        .populate('user', 'firstName')
        .exec(function (err, messages) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: messages
        });
    });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
               title: 'Not authenticated',
               error: err
            });
        }
        next();
    });
});

router.post('/', function (req, res, next) {
    var decode = jwt.decode(req.query.token);
    User.findById(decode.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        // console.log(user);
        var message = new Message({
            content: req.body.content,
            user: user
        });
        message.save(function (err, result) {
            console.log(result, 'result');
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            console.log(user.messages, 'zero');
            user.messages.push(result);
            console.log(user.messages, 'first');
            user.save();
            console.log(user.messages, 'second');
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decode = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decode.user._id) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'User do not match'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decode = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decode.user._id) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'User do not match'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;