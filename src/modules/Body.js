import React from 'react';
import LargeTile from '../modules/LargeTile.js';
import Tiles from '../modules/Tiles.js';
import '../css/Body.css';

export default class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <LargeTile keyPressed={this.props.keyPressed}/>
        <Tiles />
      </div>
    );
  }
}
