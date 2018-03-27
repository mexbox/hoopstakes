import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import WhatsHotIcon from 'material-ui-icons/Whatshot';

const styles = theme => ({
    container: {
        display: 'inline',
        float: 'right'
    },

    button: {
        margin: theme.spacing.unit,
    },
});

class TournamentShowButton extends React.Component {
    state = {
        anchorEl: null
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, changeView } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        
        return(
            <div className={classes.container}>
                <Button 
                    aria-owns={open ? 'tourney-menu' : null}
                    onClick={this.handleMenu}
                    aria-haspopup="true"
                    variant="fab"
                    mini 
                    color="default"
                    aria-label="options"
                    className={classes.button}>
                    <MoreHorizIcon />
                </Button>
                <Menu
                id="tourney-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
                >
                    <MenuItem onClick={() => {
                        changeView('gameList');
                        this.handleClose();
                    }}>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Game List" />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        changeView('teamList');
                        this.handleClose();
                    }}>
                        <ListItemIcon>
                            <WhatsHotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Team List" />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        changeView('scoreBoard');
                        this.handleClose();
                    }}>
                        <ListItemIcon>
                            <WhatsHotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Score Board" />
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

TournamentShowButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TournamentShowButton);