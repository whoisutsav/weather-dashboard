import React, { Component } from 'react';
import { connect } from 'react-redux';
import Degree from './degree.js';
import { baseUrl } from '../Configuration.js'; 
import './currentWeather.css';

export class CurrentWeather extends Component {

  getIconUrl(iconId) {
      return baseUrl + "/img/w/" + iconId + ".png";
  }

  render() {
      if (!this.props.currentWeather) {
          return null;
      }
    let iconSrc = this.getIconUrl(this.props.currentWeather.weather[0].icon);
    return (
        <div className="CurrentWeather">
                <div className="CurrentWeather-headline">Now</div>
                    <img className = "CurrentWeather-icon" src={iconSrc} alt=''/>
                    <div className="CurrentWeather-now">
                        <Degree value={this.props.currentWeather.main.temp}
                                units={this.props.units}/>
                    </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        units: state.units,
        currentWeather: state.currentWeather
    }
}

export default connect(mapStateToProps, {})(CurrentWeather)

