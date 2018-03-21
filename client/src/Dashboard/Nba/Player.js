import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    playerContainer: {
        display: 'flex',
        width: '100%'
    },
    
    playerImg: {
        maxHeight: '160px'
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        // minWidth: 400,
    },
});

class NbaPlayer extends React.Component {
    state = {
        tabValue: 0
    }

    handleChange = (event, value) => {
        this.setState({tabValue: value});
    }

    render() {
        const { classes, theme, player } = this.props;
        const { tabValue } = this.state;
        
        return (
            <div className={classes.playerContainer}>
                <div>
                    <img className={classes.playerImg} src={player.imgUrl} />
                    <Typography>
                        {player.name}
                    </Typography>
                </div>
                <div>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                        >
                            <Tab label="Season Stats" />
                            <Tab label="Upcoming Games" />
                        </Tabs>
                    </AppBar>
                    {tabValue === 0 && <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell numeric>PPG</TableCell>
                                <TableCell numeric>AST</TableCell>
                                <TableCell numeric>REB</TableCell>
                                <TableCell numeric>BLK</TableCell>
                                <TableCell numeric>STL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell numeric>{player.stats.ppg}</TableCell>
                                <TableCell numeric>{player.stats.ast}</TableCell>
                                <TableCell numeric>{player.stats.reb}</TableCell>
                                <TableCell numeric>{player.stats.blk}</TableCell>
                                <TableCell numeric>{player.stats.stl}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>}
                    {tabValue === 1 && <div>
                        2
                    </div>}
                </div>
            </div>
        );
    }
}

NbaPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(NbaPlayer);