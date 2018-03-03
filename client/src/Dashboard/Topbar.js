import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

//Top Bar
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Logo from '../assets/images/logo.png'

const styles = theme => ({
    appBar: {
        position: 'absolute',
    },

    logo: {
        maxHeight: '50px',
        padding: '0px 10px',
        cursor: 'pointer'
    }
});

class Topbar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters={true}>
                    <img alt="Hoopstakes Logo" src={Logo} className={classNames(classes.logo)} onClick={this.props.logOut} />
                    <Typography variant="title" color="inherit" noWrap className={classes.tournamentName}>
                        Hoopstakes
                    </Typography>
                </Toolbar>
            </AppBar>
      
        );
    }
}


Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
export default withStyles(styles, { withTheme: true })(Topbar);