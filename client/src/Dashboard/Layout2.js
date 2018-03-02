import React, { Component } from 'react';
import Topbar from './Topbar.js';

class Dashboard extends Component {
    constructor(props) {
      super(props);
    }
  
    
  
    render() {
      return (
        <div>
          <Topbar logOut={this.props.logOut}/>
        </div>
      );
    }
}

export default Dashboard;