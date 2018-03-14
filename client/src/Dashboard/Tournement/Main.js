import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import TournementCreate from './Create';
import TournementList from './List';
import TournementName from './TournementName';
import ConferenceSelector from './ConferenceSelector';

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
        activeTournement: 0
    }
    render() {
        const { classes, tournements } = this.props;
        const { activeTournement } = this.state;

        return (
            <div className={classNames(classes.tournementContainer)}>
                {!tournements.length && <TournementCreate />}
                {tournements.length > 0 && !activeTournement && <TournementList />} 
            
                {activeTournement &&
                    <div>
                        <TournementName />
                        <ConferenceSelector />
                    </div>
                }


            </div>
        );
    }
}

TournementMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournementMain);