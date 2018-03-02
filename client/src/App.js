import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Layout';
import Landing from './Landing/Layout';

const debug = require('debug')('hoopstakes:frontend');

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {users: []}
  
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    const App = isAuthenticated() ? <Dashboard logOut={this.logout.bind(this)} /> : <Landing logIn={this.login.bind(this)} />;
    return App;
  }
}

export default App;
