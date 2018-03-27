import React, { Component } from 'react';
import Params from '../components/params.js';
import Alert from '../components/alert.js';
import './Header.css';

class Header extends Component { 

  render() {
      return (
          <div className="Header">
            <Params/>
            <Alert/>
          </div>
    );
  }
}

export default Header;
