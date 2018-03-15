'use strict';

var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:tournaments');
const tournamentCtrl = require('../controllers/tournaments');

router.get('/teams', tournamentCtrl.get);


module.exports = router;
