'use strict';
const axios = require("axios");

const getImageUrl = (playerName) => {
  const nameArr = playerName.split(' ');
  const firstName = nameArr[0];

  nameArr.shift();
  const lastName = nameArr.join('_');

  return `https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`;
}

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const url = 'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=';
      try{
        const res = await axios.get(url);
        const players = res.data.resultSets[0].rowSet

        let finalPlayers = players.map((player) => {
          const formatedPlayer = {
              nbaStatId: player[0],
              nbaTeamStatId: player[2],
              name: player[1],
              imgUrl: getImageUrl(player[1]),
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
