import React, { Component } from 'react';
import Login from './containers/Login/Login';

import Posts from './containers/Posts/Posts';
import Navbar from './components/Navbar/Navbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1>Mi app de REACT EAM </h1>
       <Login />

        </header>
      </div>
    );
  }
}

export default App;
