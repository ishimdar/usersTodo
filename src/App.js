import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AllUsers from './component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllUsers />
      </div>
    );
  }
}

export default App;
