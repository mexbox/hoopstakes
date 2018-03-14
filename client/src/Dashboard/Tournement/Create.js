import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    form: {
        marginTop: '50px'
    }
});

class TournementShow extends React.Component {
    render() {
        const { classes } = this.props;
    
        return (
            <div className={classes.root}>
                <Paper className={classes.form}>
                    <Typography>Create a New Tournement!</Typography>
                </Paper>
            </div>
        );
    }
}

TournementShow.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournementShow);