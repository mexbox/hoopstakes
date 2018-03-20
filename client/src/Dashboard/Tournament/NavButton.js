import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import WhatsHotIcon from 'material-ui-icons/Whatshot';

const styles = theme => ({
    container: {
        textAlign: 'right'
    },

    button: {
        margin: theme.spacing.unit,
    },
});

class TournamentNavButton extends React.Component {
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
                    mini color="primary"
                    aria-label="options"
                    className={classes.button}>
                    <MenuIcon />
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
                        changeView('create');
                        this.handleClose();
                    }}>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="New Tournament" />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        changeView('list');
                        this.handleClose();
                    }}>
                        <ListItemIcon>
                            <WhatsHotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Current Tournaments" />
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

TournamentNavButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TournamentNavButton);