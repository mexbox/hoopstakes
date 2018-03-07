const Team = require('../models/team');
const axios = require("axios");
const url = "https://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=";
var debug = require('debug')('hoopstakes:teams');

module.exports = {
  create(req, res) {
    return Team
      .create({
        name: req.body.name,
        conference: req.body.conference,
        logo: req.body.logo,
        description: req.body.description
      })
      .then(team => res.status(201).send(team))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Team
      .all()
      .then(teams => res.status(200).send(teams))
      .catch(error => res.status(400).send(error));
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