import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }
});

class NbaRoster extends React.Component {

    getLastName = (name) => {
        const nameArr = name.split(' ');        
        nameArr.shift()
        return nameArr.join(' ');
    }

    render() { 
        const { classes, team } = this.props;
        
        return (
                <div className={classes.root}>
                <GridList className={classes.gridList} cols={3} >
                {team.NbaPlayers.map(player => (
                    <GridListTile key={player.imgUrl}>
                            <img src={player.imgUrl} alt={player.name} className={classes.playerImg} />
                            <GridListTileBar
                                title={this.getLastName(player.name)}
                                classes={{
                                root: classes.titleBar,
                                title: classes.title,
                                }}
                                actionIcon={
                                <IconButton>
                                    <MoreVertIcon className={classes.title} />
                                </IconButton>
                                }
                            />
                    </GridListTile>
                ))}
                </GridList>
                </div>
        )
    }
}

NbaRoster.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(NbaRoster);