'use strict';

const models = require('../models/dbConnection');
const TeamModel = models.NbaTeam;
const PlayerModel = models.NbaPlayer;


var debug = require('debug')('hoopstakes:tournements');

const Tournements = {
    get: async (req, res) => {
        try{
          const east = await TeamModel.getTeamsByConference('east', PlayerModel);
          const west = await TeamModel.getTeamsByConference('west', PlayerModel);
          const teams = { east, west };
          return res.status(201).send(teams);
        } catch (error) {
          debug(error);
          return res.status(400).send(error);
        }
    },
}
module.exports = Tournements;