import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import NbaGames from './Games';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import MoreVertIcon from 'material-ui-icons/MoreVert';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    gameDate: {
        padding: '12px',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


class NbaGameList extends React.Component {

    render () {
        const { classes, gameDays, show } = this.props;
    
        return (
            <div className={classes.root}>
                {gameDays.map((day) => {
                    return (
                        <ExpansionPanel key={day.date}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classNames(classes.tourngameDateament)}>{day.date}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <NbaGames games={day.games} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                    )
                })}
                
            </div>
        )
    }

}

NbaGameList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NbaGameList);