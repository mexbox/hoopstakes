import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';


const styles = theme => ({
    tournamentName: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class TournamentName extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          tournamentName: props.name,
        };
    } 
    
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <TextField
                  id="tournamentName"
                  label="Tournament Name"
                  className={classNames(classes.tournamentName)}
                  value={this.state.tournamentName}
                  onChange={this.handleChange('tournamentName')}
                  margin="normal"
                />
            </div>
        );
    }
}

TournamentName.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
export default withStyles(styles, { withTheme: true })(TournamentName);