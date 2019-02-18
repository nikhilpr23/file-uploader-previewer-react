import React, { Component } from 'react';
import Uploader from './Uploader/Uploader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Uploader uploadType="files"/>
        <Uploader uploadType="images"/>
      </div>
    );
  }
}

export default App;
