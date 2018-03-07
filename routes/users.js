var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:users');
const userController = require('../controllers').users;

/* GET users listing */
router.get('/', userController.list);

// router.get('/', function(req, res, next) {
//   debug('ok...');
//   res.json([{id:1,name:'corey'}, {id:2, name:'courtney'}]);
// });

module.exports = router;
