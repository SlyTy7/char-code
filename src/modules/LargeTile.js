import React from 'react';
import '../css/LargeTile.css';

export default class LargeTile extends React.Component {
  render() {
    return (
      <div className="large-tile-container">
        <div className="large-tile">
          <p className="heading">{this.props.currentKey || "Press any key to get the key info"}</p>
        </div>
      </div>
    );
  }
}
