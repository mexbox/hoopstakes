import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import UserAvatar from './UserAvatar';
import Logo from '../assets/images/logo.png';

const styles = theme => ({
    flex: {
        flex: 1,
    },
    logo: {
        maxHeight: '50px',
        padding: '0px 10px',
        cursor: 'pointer'
    }
}); 

class Topbar extends React.Component {

    render() {
        const { classes, setTourneyView } = this.props;
        
        return (
            <div>
                <AppBar position="absolute">
                    <Toolbar disableGutters={true}>
                        <img alt="Hoopstakes Logo" src={Logo} className={classNames(classes.logo)} />
                        <Typography variant="title" color="inherit" noWrap className={classes.flex}>Hoopstakes</Typography>
                        <UserAvatar logOut={this.props.logOut} />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(Topbar);