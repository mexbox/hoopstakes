'use strict';
const axios = require("axios");

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const url = 'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=';
      try{
        const res = await axios.get(url);
        const players = res.data.resultSets[0].rowSet

        let finalPlayers = players.map((player) => {
          const formatedPlayer = {
              nbaStatId: player[0],
              name: player[1],
              nbaTeamStatId: player[2],
              createdAt: new Date(),
              updatedAt: new Date()
          }
          return formatedPlayer
        });
        return queryInterface.bulkInsert('NbaPlayers', finalPlayers, {});
      } catch( e ){
        console.log(e);
      }
    
      
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('NbaPlayers', null, {});
  }
};
