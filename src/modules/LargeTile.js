import React from 'react';
import '../css/LargeTile.css';

export default class LargeTile extends React.Component {
  render() {
    const keyObj = this.props.keyPressed;
    const key = keyObj ? keyObj.char : "";
    const keyCode = keyObj ? keyObj.charCode : "";
    const code = keyObj ? keyObj.code : "";
    const keyInfo = (
      <div className="key-info">
        <p className="code">{code}</p>
        <p className="key">{key}</p>
        <p className="key-code">{keyCode}</p>
      </div>
    );

    const heading = <p className="heading">Press any key to get the key info</p>;
    const tileBody = keyObj ? keyInfo : heading ;

    return (
      <div className="large-tile-container">
        <div className="large-tile">
          {tileBody}
        </div>
      </div>
    );
  }
}
