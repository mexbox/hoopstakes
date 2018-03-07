var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:teams');
const teamController = require('../controllers').teams;

/* GET teams listing */
router.get('/', teamController.list);

/* Refresh teams from API. */
router.get('/refresh', teamController.refresh);

// router.get('/', function(req, res, next) {
//   debug('ok...');
//   res.json([{id:1,name:'corey'}, {id:2, name:'courtney'}]);
// });

module.exports = router;
