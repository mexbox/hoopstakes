import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import NbaTeamList from './NbaTeamList';

class ConferenceSelector extends React.Component {

    state = {
        conference: 0,
    };

    handleChange = (event, value) => {
        this.setState({ conference: value });
    };

    render() {
        const { classes } = this.props;
        const { conference } = this.state;
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
                <NbaTeamList conference={conference} />
            </div>
        );
    }
}

export default ConferenceSelector;