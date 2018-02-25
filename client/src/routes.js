import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './Auth/Callback';
import Auth from './Auth/Auth0';
import history from './history';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/callback" render={(props) => <Callback {...props} />} />
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
      </div>
    </Router>
  );
}