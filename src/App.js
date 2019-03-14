import React, { Component } from 'react';
import './App.scss';
import Navigation from './layouts/Navigation';
import Page from './layouts/Page';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app__container">
          <Navigation />
          <Page />
        </div>
      </Router>
    );
  }
}

export default App;
