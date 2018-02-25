import React, { Component } from 'react';
// import loading from './loading.svg';

class Callback extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'gray',
      display: 'grid'
    }

    return (
      <div style={style} >
        <p style={{margin:'auto'}}>Loggin' ya in.</p>
      </div>
    );
  }
}

export default Callback;