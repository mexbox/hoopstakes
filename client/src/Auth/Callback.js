import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';
// import loading from './loading.svg';

class Callback extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      display: 'grid'
    }

    return (
      <div style={style} >
        <img alt="Hoopstakes Logo" src={Logo} style={{margin:'auto', maxHeight:'75px'}} />
      </div>
    );
  }
}

export default Callback;