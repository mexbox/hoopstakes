import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import TournamentName from './Name';
import ConferenceSelector from '../Nba/ConferenceSelector';
import GameList from '../Nba/GameList';
import ShowButton from './ShowBtn';

const styles = theme => ({

});
class TournamentShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.tourney.name,
            activeView: 'gameList'
        }
    } 

    changeView = (view) => {
        this.setState({activeView: view});
    }

    render() {
        const { name, activeView } = this.state;
        const { nbaTeams, gameDays } = this.props;
        return (
            <div>
                <TournamentName name={name} />
                <ShowButton changeView={this.changeView.bind(this)} />
                {activeView === 'teamList' && <ConferenceSelector nbaTeams={nbaTeams} />}
                {activeView === 'gameList' && <GameList gameDays={gameDays} />}
            </div>
        )
    }
}
TournamentShow.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentShow);