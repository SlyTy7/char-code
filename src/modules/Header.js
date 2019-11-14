import React from 'react';
import '../css/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo-container">
          <div className="header-logo">key<strong>CODE</strong></div>
        </div>
        <div className="header-nav-container"></div>
      </header>
    );
  }
}
