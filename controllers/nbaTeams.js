const nbaTeam = require('../models/nbateam');
const axios = require("axios");
const url = "https://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=";
var debug = require('debug')('hoopstakes:teams');

module.exports = {
  async create(req, res) {
    try{
      const newTeam = await nbaTeam.create({
        name: req.body.name,
        conference: req.body.conference,
        logo: req.body.logo,
        description: req.body.description
      });

      return res.status(201).send(newTeam);
    } catch (error) {
      return res.status(400).send(error);
    }
  
  },
  async list(req, res) {
    try{
      const teams = await nbaTeam.all();
      return res.status(200).send(teams);
    }catch (error) {
      return res.status(200).send(error);
    }
  },
  refresh(req, res, next) {
      axios
  .get(url)
  .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};