import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import NbaTeamList from './TeamList';

class ConferenceSelector extends React.Component {
    state = {
        conference: 0,
        activeTeams: this.props.nbaTeams['east']
    };

    handleChange = (event, value) => {
        const conferenceName = value === 0 ? 'east' : 'west';
        this.setState({activeTeams: this.props.nbaTeams[conferenceName] });
        this.setState({conference: value });
    };

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