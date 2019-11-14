import React from 'react';
import './App.css';
import Header from './modules/Header.js';
import Body from './modules/Body.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}
