import React, { Component } from 'react';
import Dashboard from './Dashboard/Layout';
import Landing from './Landing/Layout';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import grey from 'material-ui/colors/grey';
const dashboardTheme = createMuiTheme({
  palette: {
    primary: grey,
    type: 'dark',
  },
});

class App extends Component {

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    const getDasboard = function(logoutFn) {
      return (
        <MuiThemeProvider theme={dashboardTheme}>
          <Dashboard logOut={logoutFn} />
        </MuiThemeProvider>
      );
    }
    if(isAuthenticated()) {
      App = getDasboard(this.logout.bind(this));
    } else{
      App = <Landing logIn={this.login.bind(this)} />
    }

    return App;
  }
}

export default App;
