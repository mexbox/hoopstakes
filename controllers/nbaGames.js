const nbaTeam = require('../models/NbaGame');
const axios = require("axios");
var debug = require('debug')('hoopstakes:nbaGames');

module.exports = {
  async list(req, res) {
    try{
      const games = await nbaGame.all();
      return res.status(200).send(games);
    }catch (error) {
      return res.status(200).send(games);
    }
  }
};