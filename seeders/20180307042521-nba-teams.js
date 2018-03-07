'use strict';
const axios = require("axios");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      try {
        const eastUrl = 'https://stats.nba.com/stats/leaguedashteamstats?Conference=East&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=';
        const westUrl = 'https://stats.nba.com/stats/leaguedashteamstats?Conference=West&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=';
        
        const resEast = await axios.get(eastUrl);
        const resWest = await axios.get(westUrl);
        const eastTeams = resEast.data.resultSets[0].rowSet;
        const westTeams = resWest.data.resultSets[0].rowSet;

        const east = eastTeams.map((team) => {
            return {
              nbaStatId: team[0],
              name: team[1],
              conference: "east",
              createdAt: new Date(),
              updatedAt: new Date()
            }
        });

        const west = westTeams.map((team) => {
          return {
            nbaStatId: team[0],
            name: team[1],
            conference: "west",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });

        await queryInterface.bulkInsert('NbaTeams', east, {});
        
        return queryInterface.bulkInsert('NbaTeams', west, {});
      } catch ( e ) {
        console.log( e );
      }
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('NbaTeams', null, {});
  }
};
