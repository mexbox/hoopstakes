import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Topbar from './Topbar';
import TournementName from './Tournement/TournementName';
import ConferenceSelector from './Tournement/ConferenceSelector';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: '100vh'
  },
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  tournementContainer: {
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '800px',
  }
});

class Layout extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Topbar logOut={this.props.logOut.bind(this)} />
          <main className={classNames(classes.content)}>
            <div className={classNames(classes.tournementContainer)}>
              <TournementName />
              <ConferenceSelector />
            </div>
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