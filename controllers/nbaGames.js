'use strict';

const models = require('../models/dbConnection');
const NbaGameModel = models.NbaGame;

var debug = require('debug')('hoopstakes:nbaGames');

const Games = { 
    getAll: async (req, res) =>{
        try{
          const allGames = await NbaGameModel.getAllGames();
          return res.status(201).send(allGames);
        } catch (error) {
          debug(error);
          return res.status(400).send(error);
        }
    },
};

module.exports = Games;