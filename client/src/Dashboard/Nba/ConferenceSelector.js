import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import NbaTeamList from './TeamList';

class ConferenceSelector extends React.Component {

    componentWillMount = () => {
        this.setState({activeTeams: this.filterTeams(this.props.nbaTeams, 'east')});
        this.setState({conference: 0 });
    }

    handleChange = (event, value) => {
        const conference = value === 0 ? 'east' : 'west';
        this.setState({activeTeams: this.filterTeams(this.props.nbaTeams, conference)});
        this.setState({conference: value });
    };

    filterTeams = (teams, conference) => {
        return teams.filter((team) => team.conference === conference);
    }

    render() {
        const { conference, activeTeams } = this.state;
        return (
            <div>
                <Paper style={{ width: '100%' }}>
                    <Tabs
                    value={conference}
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
                <NbaTeamList activeTeams={activeTeams} />
            </div>
        );
    }
}

export default ConferenceSelector;