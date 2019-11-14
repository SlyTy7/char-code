import React from 'react';
import LargeTile from '../modules/LargeTile.js';
import Tiles from '../modules/Tiles.js';
import '../css/Body.css';

function Body() {
  return (
    <div className="body">
      <LargeTile />
      <Tiles />
    </div>
  );
}

export default Body;
