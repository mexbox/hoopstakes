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
        this.state = {
            teams: false,
            activeTeams: 'east',
        };
    }
    componentWillReceiveProps(nextProps) {
        if( nextProps != this.props ) {
            this.setActiveTeams(nextProps.conference);
        }
    }

    setActiveTeams = (tab) => {
        const conference = tab === 0 ? 'east' : 'west';
        this.setState({activeTeams: this.state.teams[conference] })
    }

    getTeamLogo = (name) => {
        const nameArr = name.split(' ');
        let shortName = nameArr[nameArr.length-1].toLowerCase();
        if(shortName.indexOf('7') > -1){
            shortName = 'sixers';
        }
        return teamLogos[shortName] || '';
    }

    getTeams = (conference) => {
        console.log(this.state.teams);
        console.log(conference);
        if( conference === 0){
            return this
        }
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