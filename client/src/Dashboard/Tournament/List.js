import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    tournamentName: {
        padding: '12px',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


class TournamentList extends React.Component {
    render() {
        const { classes, tournaments } = this.props;
    
        return (
            <div className={classes.root}>
                {tournaments.map((tournament) => {
                    return (
                        <ExpansionPanel key={tournament.id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classNames(classes.tournament)}>{tournament.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum ...
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                    )
                })}
                
            </div>
        );
    }
}

TournamentList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentList);