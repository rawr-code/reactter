import React, { Component } from 'react';
import './App.css';

// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header';
import Main from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
