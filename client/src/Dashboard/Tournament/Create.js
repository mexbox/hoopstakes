import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    form: {
        marginTop: '50px'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '15px',
    }
});

class TournamentCreate extends React.Component {

    render() {
        const { classes, create } = this.props;
    
        return (
            <div className={classes.root}>
                <Paper className={classes.form}>
                    <Typography align='center'>Create a New Tournament!</Typography>
                    <br />
                    <div className={classes.buttonContainer}>
                        <Button variant="raised" color="inherit" className={classes.button} onClick={ create }>
                            Create
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

TournamentCreate.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentCreate);