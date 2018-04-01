'use strict';

const models = require('../models/dbConnection');
const NbaGameModel = models.NbaGame;

const Games = { 
    getAll: async (req, res) =>{
        try{
          const allGames = await NbaGameModel.getGamesByDay();
          return res.status(201).send(allGames);
        } catch (error) {
          debug(error);
          return res.status(400).send(error);
        }
    },
};

module.exports = Games;