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
    loading: true
  };

  componentWillMount = () => {
    setTimeout(() => {
      //imitate network time
      //probably try to load most of required data here.
      this.setState({tournements: [1]});
      this.setState({loading: false});
    }, 2500);
  }

  render() {
    const { classes } = this.props;
    const { loading, tournements } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Topbar logOut={this.props.logOut.bind(this)} />
          <main className={classNames(classes.content)}>
            {loading && <Callback />}
            {!loading && <TournementMain tournements={tournements} />}
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