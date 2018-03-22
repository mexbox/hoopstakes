import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    backgroundColor: '#303030',
    height: '100vh',
    paddingTop:'5%'
  },
  title: {
    color: 'white'
  }
};

class Landing extends Component {
  
    render() {
      return (
        <div style={{textAlign: 'center'}} className={this.props.classes.root}>
          <Typography className={this.props.classes.title} variant="title" noWrap>Hoopstakes</Typography>
          <div>
            <img alt="basketball-fail" src="https://media1.tenor.com/images/e5b8c650ed7911a48b6d0242f326f73c/tenor.gif" />
          </div>

          <Button variant="raised" color="primary" aria-label="login" onClick={this.props.logIn}>Play</Button>
        </div>
      );
    }
}  

export default withStyles(styles)(Landing);