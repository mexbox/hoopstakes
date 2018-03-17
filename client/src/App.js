import React, { Component } from 'react';
import Dashboard from './Dashboard/Layout';
import Landing from './Landing/Layout';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
const dashboardTheme = createMuiTheme({
  palette: {
    primary: grey,
    type: 'dark',
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user_profile')) || false,
    }
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentWillMount = () => {
    if(!this.state.user) {
      window.addEventListener('session_set', () => {
        this.setState({user: JSON.parse(localStorage.getItem('user_profile'))});
      });
    }
  }

  render() {
    const { user } = this.state;
    const { isAuthenticated } = this.props.auth;
    const getDasboard = function(logoutFn) {
      return (
        <MuiThemeProvider theme={dashboardTheme}>
          <Dashboard logOut={logoutFn} user={user} />
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
