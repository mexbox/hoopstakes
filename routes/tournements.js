'use strict';

var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:tournements');
const tournementCtrl = require('../controllers/tournements');

router.get('/teams', tournementCtrl.get);


module.exports = router;
