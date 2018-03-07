'use strict';

const axios = require("axios");
const debug = require('debug')('hoopstakes:seeds:team');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      try {
        const standingsUrl = 'https://data.nba.net/prod/v1/current/standings_conference.json';
        const eastUrl = 'https://stats.nba.com/stats/leaguedashteamstats?Conference=East&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=';
        const westUrl = 'https://stats.nba.com/stats/leaguedashteamstats?Conference=West&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=';

        const resEast = await axios.get(eastUrl);
        const resWest = await axios.get(westUrl);
        const resStandings = await axios.get(standingsUrl);

        const eastTeams = resEast.data.resultSets[0].rowSet;
        const westTeams = resWest.data.resultSets[0].rowSet;
        const standings = resStandings.data.league.standard.conference;

        const eastStandingsArr = standings.east.map((team) => {
            return team.teamId;
        }, {});

        const westStandingsArr = standings.west.map((team) => {
          return team.teamId
        }, {});


        const east = eastTeams.map((team) => {
            return {
              nbaStatId: team[0],
              name: team[1],
              conference: "east",
              rank: eastStandingsArr.indexOf(String(team[0]))+1,
              createdAt: new Date(),
              updatedAt: new Date()
            }
        });

        const west = westTeams.map((team) => {
          return {
            nbaStatId: team[0],
            name: team[1],
            conference: "west",
            rank: westStandingsArr.indexOf(String(team[0]))+1,
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
