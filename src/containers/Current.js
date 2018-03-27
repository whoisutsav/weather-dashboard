import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/currentWeather.js'
import AirQuality from '../components/airQuality.js'
import { loadWeather, loadForecast, loadSO2 } from '../actions/index.js'
import './Current.css';

class Current extends Component {
  componentDidMount() {
      this.props.loadWeather();
      this.props.loadForecast();
      this.props.loadSO2();
  }

  render() {
    return (
        <div className="Current">
            <CurrentWeather/>
            <AirQuality/>
        </div>
    );
  }
}

const mapDispatchToProps = {
    loadWeather,
    loadForecast,
    loadSO2
}

export default connect(null, mapDispatchToProps)(Current) 

