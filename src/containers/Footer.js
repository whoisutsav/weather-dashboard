import React, { Component } from 'react';
import NotificationForm from '../components/notificationForm.js';
import './Footer.css';

class Footer extends Component { 

  render() {
      return (
          <div className="Footer">
            <NotificationForm/>
          </div>
    );
  }
}

export default Footer;
