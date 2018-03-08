import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
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
        teams: false
    };

    componentWillMount = async () => {
        const teamsRes = await fetch('/api/tournements/teams');
        const teamsJson = await teamsRes.json();
        console.log(teamsJson);
        teamsJson.east.forEach((team) => {
            team.NbaPlayers.sort((a,b) => {
                if ( a.stats.ppg > b.stats.ppg) return -1;
                if ( a.stats.ppg < b.stats.ppg) return 1;
                return 0;
            });
        });

        teamsJson.west.forEach((team) => {
            team.NbaPlayers.sort((a,b) => {
                if ( a.stats.ppg > b.stats.ppg)return -1;
                if ( a.stats.ppg < b.stats.ppg)return 1;
                return 0;
            });
        });
        this.setState({teams: teamsJson});
    }

    handleChange = (event, value) => {
        this.setState({ conference: value });
    };

    getTeamLogo = (name) => {
        const nameArr = name.split(' ');
        let shortName = nameArr[nameArr.length-1].toLowerCase();
        if(shortName.indexOf('7') > -1){
            shortName = 'sixers';
        }

        return teamLogos[shortName] || '';
    }

    getTeams(conferenceIndex) {
        const conference = conferenceIndex === 0 ? 'east' : 'west';
        const teams = this.state.teams[conference];
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {teams && teams.map( (team) => { 
                    team.logo = this.getTeamLogo(team.name)
                    return (
                        <ExpansionPanel key={team.name}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                { team.logo && <img src={team.logo} className={classNames(classes.teamLogo)} /> }
                                <Typography className={classNames(classes.teamName)}>{team.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Table className={classes.table}>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>PPG</TableCell>
                                        <TableCell>AST</TableCell>
                                        <TableCell>REB</TableCell>
                                        <TableCell>BLK</TableCell>
                                        <TableCell>STL</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {team.NbaPlayers.map( player => {
                                        return (
                                        <TableRow key={player.id}>
                                            <TableCell><img src={player.imgUrl} style={{maxHeight:'40px'}} /></TableCell>
                                            <TableCell>{player.name}</TableCell>
                                            <TableCell>{player.stats.ppg}</TableCell>
                                            <TableCell>{player.stats.ast}</TableCell>
                                            <TableCell>{player.stats.reb}</TableCell>
                                            <TableCell>{player.stats.blk}</TableCell>
                                            <TableCell>{player.stats.stl}</TableCell>
                                        </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                    )
                })}
                
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const { teams } = this.state;
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
                        <Tab label="EAST" />
                        <Tab label="WEST" />
                  </Tabs>
                </Paper>
                <br />
                {teams ? this.getTeams(this.state.conference) : <div> loading teams </div>}
                
            </div>
        );
    }
}
NbaTeams.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NbaTeams);