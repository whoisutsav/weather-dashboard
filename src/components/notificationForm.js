import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotification } from '../actions/index.js';
import { toKelvinFrom } from '../util/temperature.js';
import './notificationForm.css';

export class NotificationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        temp: '', 
                        submitted: false
                    }
        this.handleChange = this.handleChange.bind(this);
        this.submitNotification = this.submitNotification.bind(this);
    }

    handleChange(e) {
        const val = e.target.value;
        this.setState((prevState, props) => (
            {temp: /^-?\d*$/.test(val) ? val : prevState.temp}
        ));
    }

    submitNotification() {
        if (this.state.submitted || !this.state.temp) {
            return;
        }
        this.setState({submitted: true});
        this.props.createNotification(toKelvinFrom(this.props.units, Number(this.state.temp)));
    }

    renderForm() {
      return (
          <span className="NotificationForm-new">
              <span className="NotificationForm-title">Notify me when temperatures exceed: </span>
              <input className="NotificationForm-input" type="text" value={this.state.temp} onChange={this.handleChange}></input>
              <span className="NotificationForm-units">{" ° " + this.props.units}</span>
              <span className={"NotificationForm-button"} onClick={this.submitNotification} submitted={this.state.submitted.toString()}>➞ </span>
          </span>
      );
  }

    renderAcknowledgement() {
        return (
            <span className="NotificationForm-processed">Submitted. Thank you.</span>
        );
    }

    render() {
        return (
            <span className="NotificationForm">
            {
                this.props.notification ? this.renderAcknowledgement() :
                                            this.renderForm()
            }
            </span>
        );
        }
}

const mapStateToProps = (state) => {
    return { 
        units: state.units,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    createNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationForm)

