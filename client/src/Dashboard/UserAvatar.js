import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
    avatar: {
        marginRight: 20,
    },
    bigAvatar: {
        width: 40,
        height: 40,
    },
}); 


class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.getProfile(),
            anchorEl: null,
        };
    }

    getProfile = () => {
        const profile = JSON.parse(localStorage.getItem('user_profile')) || false;
        if(!profile) {
            setInterval(() => {
                this.setState({profile: JSON.parse(localStorage.getItem('user_profile')) || false });
            }, 200)
        }
        return profile
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { profile, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <span>
                <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
                >
                    <Avatar
                        alt="User"
                        src={profile.picture}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </IconButton>
                <Menu
                id="menu-appbar"
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
                    <MenuItem onClick={this.handleClose}>Profile Info</MenuItem>
                    <MenuItem onClick={this.props.logOut}>Logout</MenuItem>
                </Menu>
            </span>
        );
    }
}

UserAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(UserAvatar);