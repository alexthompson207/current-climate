import './App.css';
import React, { Component } from 'react';
import Story from '../Story/Story';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  render() {
    return (
      <div className="App">
        <Story />
      </div>
    );
  }
}


export default App;
