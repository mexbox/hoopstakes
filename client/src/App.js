import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onClick={this.props.logIn}>Log In</div>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/users', {
      headers: {
      'authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'content-type': 'application/json'
      }
    },).then((results) => {
      return results.json()
    }).then((results) => {
      console.log(results);
    }).catch((err)=>{
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        Authorized
        <div style={{width:"400px", height:"400px", border:"1px solid black"}}>
          Users:
        </div>
      </div>
    );
  }
}

export default App;
