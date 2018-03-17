import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Callback from '../Auth/Callback';
import TournamentMain from './Tournament/Main';
import Topbar from './Topbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',  
  },
  content: {
    minHeight: '100vh',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});

class Layout extends React.Component {
  state = {
    loading: true,
    activeView: false,
    activeTournament: false,
    teams: [],
  };

  componentWillReceiveProps = async (nextProps) => {
    if(nextProps.user && nextProps.user !== this.props.user){
      await this.initTourneys(nextProps.user.sub);
    }
  }

  componentWillMount = async () => {
    if(this.props.user) {
      await this.initTourneys(this.props.user.sub);
    }
  }

  initTourneys = async (userId) => {
    const data = await this.getTeams(userId);
    this.setState({tournaments: data.tourneys});
    this.setState({teams: data.teams});
    this.setState({activeView: !this.state.tournaments.length ? 'create' : 'list'});
    this.setState({loading: false});
  }
  
  getTeams = async (userId) => {
    const response = await fetch(`/api/tournaments/teams?userId=${userId}`);
    const data = await response.json();

    data.teams.east.forEach((team) => {
        team.NbaPlayers.sort((a,b) => {
            if ( a.stats.ppg > b.stats.ppg) return -1;
            if ( a.stats.ppg < b.stats.ppg) return 1;
            return 0;
        });
    });

    data.teams.west.forEach((team) => {
        team.NbaPlayers.sort((a,b) => {
            if ( a.stats.ppg > b.stats.ppg)return -1;
            if ( a.stats.ppg < b.stats.ppg)return 1;
            return 0;
        });
    });

    return data;
  }

  setActiveTournament = (tourneyId) => {
    const activeTournament = this.state.tournaments.find((tourney) => {
      if(tourney.id === tourneyId){
        return true;
      }
      return false;
    });
    this.setState({activeTournament: activeTournament});
    this.changeTournamentView('show');
  }

  changeTournamentView =  (view) => {
    if( (view === 'list' || view === 'show') && !this.state.tournaments.length ) {
      view = 'create';
    }

    if( view !== 'show' ) {
      this.setState({activeTournament: false});
    }
    this.setState({activeView: view});
  }

  createTournament = async (tourneyName) => {
    this.setState({loading: true});
    const response = await fetch('/api/tournaments/create',{
      method: 'POST',
      body: JSON.stringify({ name: tourneyName, userId: JSON.parse(localStorage.getItem('user_profile')).sub }),
      headers: {
        'content-type': 'application/json'
      }
    });
    const tourneys = await response.json();
    this.setState({tournaments: tourneys})
    this.changeTournamentView('list');
    this.setState({loading: false});
  }

  render() {
    const { classes } = this.props;
    const {
            loading,
            tournaments,
            activeView,
            activeTournament,
            teams
          } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Topbar logOut={this.props.logOut.bind(this)} setTourneyView={this.changeTournamentView.bind(this)} />
          <main className={classNames(classes.content)}>
            {loading && <Callback />}
            {!loading && <TournamentMain
                            nbaTeams={teams} 
                            activeView={activeView} 
                            tournaments={tournaments}
                            activeTournament={activeTournament} 
                            show={this.setActiveTournament.bind(this)} 
                            create={this.createTournament.bind(this)} 
                          />}
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);