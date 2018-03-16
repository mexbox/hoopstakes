import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import TournementCreate from './Create';
import TournementList from './List';
import TournementShow from './Show';


const styles = theme => ({
    tournementContainer: {
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '800px',
    }
});

class TournementMain extends React.Component {

    state = {
        activeTournement: false
    }

    render() {
        const { classes, tournements, activeView, create } = this.props;
        const { activeTournement } = this.state;

        return (
            <div className={classNames(classes.tournementContainer)}>
                {activeView === 'create' && <TournementCreate create={create.bind(this)} />}
                {activeView === 'list' && <TournementList tournements={tournements} />} 
                {activeView === 'show' && <TournementShow id={activeTournement} />}
            </div>
        );
    }
}

TournementMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TournementMain);