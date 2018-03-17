import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import TournamentName from './Name';
import ConferenceSelector from '../Nba/ConferenceSelector';

const styles = theme => ({

});
class TournamentShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.tourney.name
        }
    } 

    render() {
        const { name } = this.state;
        const { classes, nbaTeams } = this.props;
        return (
            <div>
                <TournamentName name={name} />
                <ConferenceSelector nbaTeams={nbaTeams} />
            </div>
        )
    }
}
TournamentShow.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentShow);