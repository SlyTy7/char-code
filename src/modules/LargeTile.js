import React from 'react';
import '../css/LargeTile.css';

export default class LargeTile extends React.Component {
  render() {
    return (
      <div className="large-tile">
        <div className="large-tile-inner-container">
          <p className="heading">Press any key to get the key info</p>
        </div>
      </div>
    );
  }
}
