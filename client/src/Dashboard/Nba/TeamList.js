import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import NbaRoster from './Roster';
import teamLogos from './TeamLogos';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    teamName: {
        padding: '12px',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    teamLogo: {
        maxHeight: '45px'
    }
});

class NbaTeamList extends React.Component {
    constructor(props) {
        super(props);
        console.log('list', props);
        this.state = {
            activeTeams: props.activeTeams,
        };
    }
    componentWillReceiveProps = (nextProps) => {
        console.log('next', nextProps);
        this.setState({activeTeams: nextProps.activeTeams});
    }

    getTeamLogo = (name) => {
        const nameArr = name.split(' ');
        let shortName = nameArr[nameArr.length-1].toLowerCase();
        if(shortName.indexOf('7') > -1){
            shortName = 'sixers';
        }
        return teamLogos[shortName] || '';
    }
    
    render() {
        const { conference, classes } = this.props;
        const { activeTeams } = this.state;
    
        return (
            <div className={classes.root}>
                {activeTeams && activeTeams.map( (team) => { 
                    team.logo = this.getTeamLogo(team.name)
                    return (
                        <ExpansionPanel key={team.name}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                { team.logo && <img src={team.logo} className={classNames(classes.teamLogo)} /> }
                                <Typography className={classNames(classes.teamName)}>{team.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <NbaRoster team={team} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                    )
                })}
            </div>
        );
    }
}

NbaTeamList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NbaTeamList);