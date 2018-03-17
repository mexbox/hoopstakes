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

    render() {
        const { classes,
                tournaments,
                nbaTeams,
                activeView,
                activeTournament,
                create,
                show
            } = this.props;

        return (
            <div className={classNames(classes.tournamentContainer)}>
                {activeView === 'create' && <TournamentCreate create={create.bind(this)} />}
                {activeView === 'list' && <TournamentList show={show.bind(this)} tournaments={tournaments} />} 
                {activeView === 'show' && <TournamentShow tourney={activeTournament} nbaTeams={nbaTeams} />}
            </div>
        );
    }
}

TournamentMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournamentMain);