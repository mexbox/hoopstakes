import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import WhatsHotIcon from 'material-ui-icons/Whatshot';

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

    state = {
        drawer: false
    }

    toggleDrawer = (open) => () => {
        this.setState({drawer: open});
    }


    render() {
        const { classes, setTourneyView } = this.props;
        
        return (
            <div>
                <AppBar position="absolute">
                    <Toolbar disableGutters={true}>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                        <img alt="Hoopstakes Logo" src={Logo} className={classNames(classes.logo)} />
                        <Typography variant="title" color="inherit" noWrap className={classes.flex}>Hoopstakes</Typography>
                        <UserAvatar logOut={this.props.logOut} />
                    </Toolbar>
                </AppBar>
                <Drawer anchor="top" open={this.state.drawer} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        // onKeyDown={this.toggleDrawer(false)}
                    >
                        <List>
                        
                            <ListItem button onClick={() => {setTourneyView('create')}}>
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="New Tournement" />
                            </ListItem>
                            
                            <ListItem button onClick={() => {setTourneyView('list') }}>
                                <ListItemIcon>
                                    <WhatsHotIcon />
                                </ListItemIcon>
                                <ListItemText primary="Current Tournements" />
                            </ListItem>
                        </List>

                    </div>
                </Drawer>
            </div>
        );
    }
}


Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(Topbar);