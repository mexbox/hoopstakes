'use strict';

var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:nbaGames');
const nbaGamesCtrl = require('../controllers/nbaGames');

router.get('/all-games', nbaGamesCtrl.getAll);

module.exports = router;