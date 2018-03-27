import React, { Component } from 'react';
import { connect } from 'react-redux';
import './airQuality.css';

export class AirQuality extends Component {


  render() {
      if (!this.props.so2) {
          return null;
      }
    return (
        <div className="AirQuality">
            <div className="AirQuality-title">Air Quality</div>
            <div className="AirQuality-so2">{"SO₂: " + this.props.so2.data[0].value.toFixed(2)}</div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        so2: state.so2
    }
}

export default connect(mapStateToProps, {})(AirQuality)

