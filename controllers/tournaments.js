'use strict';

const models = require('../models/dbConnection');
const TeamModel = models.NbaTeam;
const TournamentModel = models.Tournament;
const PlayerModel = models.NbaPlayer;
const ParticipantModel = models.Participants;

var debug = require('debug')('hoopstakes:tournaments');

const Tournaments = { 
   getAll: async (req, res) =>{
    try{
      const allTeams = await TeamModel.getAllTeams();
      return res.status(201).send(allTeams);
    } catch (error) {
      debug(error);
      return res.status(400).send(error);
    }
   },
   get: async (req, res) => {
        try{
          const east = await TeamModel.getTeamsByConference('east', PlayerModel);
          const west = await TeamModel.getTeamsByConference('west', PlayerModel);
          const tourneys = await TournamentModel.findTourneysByUser(req.query.userId, ParticipantModel);
          const teams = { east, west };
          const tourneyInfo = {tourneys, teams};
          return res.status(201).send(tourneyInfo);
        } catch (error) {
          debug(error);
          return res.status(400).send(error);
        }
    },
    create: async(req, res) => {
      try{
        await TournamentModel.newTourney(req.body, ParticipantModel);
        const tourneys = await TournamentModel.findTourneysByUser(req.body.userId, ParticipantModel);
        return res.status(200).send(tourneys);
      }catch(e){
        console.log(e);
      }
    },
    update: async(req, res) => {
      try{
        await TournamentModel.updateTourney(req.body, ParticipantModel);
        const tourneys = await TournamentModel.findTourneysByUser(req.body.userId, ParticipantModel);
        return res.status(200).send(tourneys);
      }catch(e){
        return res.status(401).send(e);
      }
    }
}
module.exports = Tournaments;