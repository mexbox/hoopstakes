'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('NbaTeams', [
        {
          nbaStatId: 1610612737,
          name: "Atlanta Hawks",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612738,
          name: "Boston Celtics",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612751,
          name: "Brooklyn Nets",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612766,
          name: "Charlotte Hornets",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612741,
          name: "Chicago Bulls",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nbaStatId: 1610612739,
          name: "Cleveland Cavaliers",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612742,
          name: "Dallas Mavericks",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612743,
          name: "Denver Nuggets",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612765,
          name: "Detroit Pistons",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612744,
          name: "Golden State Warriors",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612745,
          name: "Houston Rockets",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612754,
          name: "Indiana Pacers",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612746,
          name: "LA Clippers",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612747,
          name: "Los Angeles Lakers",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612763,
          name: "Memphis Grizzlies",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612748,
          name: "Miami Heat",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612749,
          name: "Milwaukee Bucks",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612750,
          name: "Minnesota Timberwolves",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612740,
          name: "New Orleans Pelicans",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612752,
          name: "New York Knicks",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612760,
          name: "Oklahoma City Thunder",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612753,
          name: "Orlando Magic",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612755,
          name: "Philadelphia 76ers",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612756,
          name: "Phoenix Suns",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612757,
          name: "Portland Trail Blazers",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612758,
          name: "Sacramento Kings",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612759,
          name: "San Antonio Spurs",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612761,
          name: "Toronto Raptors",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612762,
          name: "Utah Jazz",
          conference: "west",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nbaStatId: 1610612764,
          name: "Washington Wizards",
          conference: "east",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('NbaTeams', null, {});
  }
};
