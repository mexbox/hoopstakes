import Auth0Lock from 'auth0-lock';
import history from '../history';
import Logo from '../assets/images/logo.png';

export default class Auth {
  lock = new Auth0Lock('Q-BwLO1VCJGSPWuY5SQlpCWjTzjzDMob', 'hoopstakes.auth0.com', {
    autoclose: true,
    auth: {
      redirectUrl: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      audience: 'https://api.hoopestakes.com',
      params: {
        scope: 'openid profile'
      }
    },
    theme: {
      logo: Logo,
      primaryColor: '#9e9e9e'
    },
    languageDictionary: {
      title: "Hoopstakes"
    },
  });

  constructor() {
    this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  handleAuthentication() {
    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
      history.replace('/home');
    });
  }

  setSession(authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        //get user profile
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (!error) {
            localStorage.setItem('user_profile', JSON.stringify(profile));
            const userEvent = new Event('session_set');
            window.dispatchEvent(userEvent);
          }
        });

        // navigate to the home route
        history.replace('/');
      }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_profile');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
