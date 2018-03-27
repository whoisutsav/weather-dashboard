import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNotification } from '../actions/index.js';
import './alert.css';

export class Alert extends Component {
    constructor(props) {
        super(props);
        this.pollNotification = this.pollNotification.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.pollNotification()
        }, 5000);
    }

    pollNotification() {
        if (this.props.notification) {
            this.props.loadNotification(this.props.notification._id);
        }
    }

  render() {
      if (this.props.notification && Object.keys(this.props.notification.alerts).length !== 0) {
        return (
            <div className="Alert">
                <div className="Alert-text">Temperature alert!</div>
            </div>
        );
      } else {
          return null;
      }
  }
}

const mapStateToProps = (state) => {
    return { 
        notification: state.notification,
    }
}

const mapDispatchToProps = {
    loadNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)

