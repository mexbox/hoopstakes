import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import TournamentCreate from './Create';
import TournamentList from './List';
import TournamentShow from './Show';


const styles = theme => ({
    tournamentContainer: {
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '800px',
    }
});

class TournamentMain extends React.Component {

    state = {
        activeTournament: false
    }

    render() {
        const { classes, tournaments, activeView, create } = this.props;
        const { activeTournament } = this.state;

        return (
            <div className={classNames(classes.tournamentContainer)}>
                {activeView === 'create' && <TournamentCreate create={create.bind(this)} />}
                {activeView === 'list' && <TournamentList tournaments={tournaments} />} 
                {activeView === 'show' && <TournamentShow id={activeTournament} />}
            </div>
        );
    }
}

TournamentMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentMain);