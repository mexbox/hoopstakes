'use strict';

var express = require('express');
var router = express.Router();
var debug = require('debug')('hoopstakes:tournaments');
const tournamentCtrl = require('../controllers/tournaments');

router.get('/teams', tournamentCtrl.get);
router.get('/all-teams', tournamentCtrl.getAll);
router.post('/create', tournamentCtrl.create);
router.post('/update', tournamentCtrl.update);

module.exports = router;
