import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import NbaRoster from './Roster';



class NbaGameList extends React.Component {
    state = {
        activeTeam: false
    }

    selectTeam = (team) => {
        this.setState({activeTeam: team});
    }

    render () {
        const { games } = this.props;
        const { activeTeam } = this.state;
        return (
            <div>
                {activeTeam && <NbaRoster team={activeTeam} />}
                {!activeTeam && <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >status</TableCell>
                            <TableCell >home team</TableCell>
                            <TableCell >away team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((game) => {
                            return ( 
                                <TableRow key={game.id}>
                                    <TableCell>{game.status}</TableCell>
                                    <TableCell onClick={() => this.selectTeam(game.homeTeam)}>{game.homeTeam.name}</TableCell>
                                    <TableCell onClick={() =>  this.selectTeam(game.awayTeam)}>{game.awayTeam.name}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>}
            </div>
        )
    }
}

export default NbaGameList
// NbaGameList.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(NbaGameList);
