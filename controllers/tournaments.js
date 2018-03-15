'use strict';

const models = require('../models/dbConnection');
const TeamModel = models.NbaTeam;
const TournamentModel = models.Tournament;
const PlayerModel = models.NbaPlayer;
const userId = 'google | 30923320235553';

var debug = require('debug')('hoopstakes:tournaments');

const Tournaments = {
    get: async (req, res) => {
        try{
          const east = await TeamModel.getTeamsByConference('east', PlayerModel);
          const west = await TeamModel.getTeamsByConference('west', PlayerModel);
          const tourneys = await TournamentModel.findTourneysByUser(userId);
          const teams = { east, west };
          const tourneyInfo = {tourneys, teams};
          return res.status(201).send(tourneyInfo);
        } catch (error) {
          debug(error);
          return res.status(400).send(error);
        }
    },
}
module.exports = Tournaments;