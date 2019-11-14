import React from 'react';
import '../css/LargeTile.css';

let TileBody = props => {
  const keyObj = props.keyPressed;

  if(!keyObj){
    return <p className="heading">Press any key to get the key info</p>;
  }

  return (
    <div className="key-info">
      <p className="code">{keyObj ? keyObj.code : ""}</p>
      <p className="key">{keyObj ? keyObj.char : ""}</p>
      <p className="key-code">{keyObj ? keyObj.charCode : ""}</p>
    </div>
  );
};

export default class LargeTile extends React.Component {
  render() {
    return (
      <div className="large-tile-container">
        <div className="large-tile">
          <TileBody keyPressed={this.props.keyPressed} />
        </div>
      </div>
    );
  }
}
