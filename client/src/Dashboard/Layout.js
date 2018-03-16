import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Callback from '../Auth/Callback';
import TournementMain from './Tournement/Main';
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
  };

  componentWillMount = () => {
    setTimeout(() => {
      //imitate network time
      //probably try to load most of required data here.
      // this.setState({tournements: [{name: 'my tourney', id: 1}]});
      this.setState({tournements: []});
      this.setState({activeView: !this.state.tournements.length ? 'create' : 'list'});
      this.setState({loading: false});
    }, 2500);
  }

  changeTournementView =  (view) => {
    if( (view === 'list' || view === 'show') && !this.state.tournements.length ) {
      view = 'create';
    }
    this.setState({activeView: view});
  }

  createTournement = () => {
    setTimeout(() => { 
      //imitate network call to create
      const newId = this.state.tournements.length + 1;
      var newTournament = {name:`new tourney ${newId}`, id: newId}
      this.setState({tournements: [...this.state.tournements, newTournament]})
      this.changeTournementView('list');
    }, 2500)
  }

  render() {
    const { classes } = this.props;
    const { loading, tournements, activeView } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Topbar logOut={this.props.logOut.bind(this)} setTourneyView={this.changeTournementView.bind(this)} />
          <main className={classNames(classes.content)}>
            {loading && <Callback />}
            {!loading && <TournementMain activeView={activeView} tournements={tournements} create={this.createTournement.bind(this)} />}
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