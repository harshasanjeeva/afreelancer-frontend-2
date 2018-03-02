import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Root from './components/Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
