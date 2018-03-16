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
    tournementName: {
        padding: '12px',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


class TournementList extends React.Component {
    render() {
        const { classes, tournements } = this.props;
    
        return (
            <div className={classes.root}>
                {tournements.map((tournement) => {
                    return (
                        <ExpansionPanel key={tournement.id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classNames(classes.tournement)}>{tournement.name}</Typography>
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

TournementList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournementList);