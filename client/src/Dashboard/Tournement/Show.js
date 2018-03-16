import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import TournementName from './Name';
import ConferenceSelector from '../Nba/ConferenceSelector';

const styles = theme => ({

});
class TournamentShow extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TournementName />
                <ConferenceSelector />
            </div>
        )
    }
}
TournamentShow.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentShow);