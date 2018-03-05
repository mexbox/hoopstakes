import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import teamLogos from './NbaTeamLogos'

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

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
class NbaTeams extends React.Component {

    state = {
        conference: 0,
        derp:2,
        teams:{
            eastern:[
                {name: 'celtics', logo: teamLogos.celtics},
                {name: 'cavs', logo: teamLogos.cavs},
                {name: 'heat', logo: teamLogos.heat},
                {name: 'pacers', logo: teamLogos.pacers},
                {name: 'raptors', logo: teamLogos.raptors},
                {name: 'sixers', logo: teamLogos.sixers},
                {name: 'wizards', logo: teamLogos.wizards},
                {name: 'wolves', logo: teamLogos.wolves}
            ],
            western:[
                {name: 'blazers', logo: teamLogos.blazers},
                {name: 'bucks', logo: teamLogos.bucks},
                {name: 'nuggets', logo: teamLogos.nuggets},
                {name: 'pelicans', logo: teamLogos.pelicans},
                {name: 'rockets', logo: teamLogos.rockets},
                {name: 'spurs', logo: teamLogos.spurs},
                {name: 'thunder', logo: teamLogos.thunder},
                {name: 'warriors', logo: teamLogos.warriors}
            ]
        }
    };

    handleChange = (event, value) => {
        this.setState({ conference: value });
    };

    getTeams(conferenceIndex) {
        const conference = conferenceIndex === 0 ? 'eastern' : 'western';
        const teams = this.state.teams[conference];
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {teams.map( (team) => {
                    return (
                        <ExpansionPanel key={team.name}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <img src={team.logo} className={classNames(classes.teamLogo)} />
                                <Typography className={classNames(classes.teamName)}>{team.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                    )
                })}
                
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper style={{ width: '100%' }}>
                    <Tabs
                    value={this.state.conference}
                    onChange={this.handleChange}
                    indicatorColor="#fff"
                    textColor="primary"
                    centered
                    fullWidth
                    >
                        <Tab label="Eastern Conference" />
                        <Tab label="Western Conference" />
                  </Tabs>
                </Paper>
                <br />
                {this.getTeams(this.state.conference)}
            </div>
        );
    }
}
NbaTeams.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NbaTeams);