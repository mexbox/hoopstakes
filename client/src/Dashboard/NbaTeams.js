import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class NbaTeams extends React.Component {
    
    state = {};
    render() {
        return (
            <div>
                <Paper style={{ width: '100%' }}>
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                    fullWidth
                    >
                        <Tab label="Eastern Conference" />
                        <Tab label="Western Conference" />
                  </Tabs>
                </Paper>
            </div>
        );
    }
}

export default NbaTeams;