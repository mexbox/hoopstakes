import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Landing extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div style={{textAlign: 'center'}}>
          <div>
            <img src="https://media1.tenor.com/images/e5b8c650ed7911a48b6d0242f326f73c/tenor.gif" />
          </div>

          <Button variant="raised" color="primary" aria-label="login" onClick={this.props.logIn}>Log In</Button>
        </div>
      );
    }
}  

export default Landing;