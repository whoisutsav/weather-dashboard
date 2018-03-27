import React, { Component } from 'react';
import Degree from './degree.js';
import PropTypes from 'prop-types';
import './forecastDay.css';

export class ForecastDay extends Component {
  constructor(props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {showDetails: false};
  }

  getIconUrl(iconId) {
      return "http://openweathermap.org/img/w/" + iconId + ".png";
  }

  getDay() {
      return ['Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat'][this.props.dayOfWeek]
  }

    toggleDetails() {
        this.setState((prevState) => 
            ({showDetails: !prevState.showDetails })
        );
    }

  renderSummary() {
      return (
            <div>
              <div className="ForecastDay-day">{this.getDay()}</div>
            <img className = "ForecastDay-icon" src={this.getIconUrl(this.props.iconId)} alt=''/>
            <br></br>
            <div className="ForecastDay-min">  
                <Degree value={this.props.maxTemp}
                        units={this.props.units}/>
            </div>
            <div className="ForecastDay-max"> 
                <Degree value={this.props.minTemp}
                        units={this.props.units}/>
            </div>
          </div>
      );
  }

  renderDetails() {
      if(!this.state.showDetails) {
          return (<div className="ForecastDay-details">
                    <div onClick={this.toggleDetails}>Details</div></div>);
      } else {
        return (
            <div className="ForecastDay-details">
                <div onClick={this.toggleDetails}>Hide</div>
                <div className="ForecastDay-humidity">{"Humidity: " + Math.round(this.props.avgHumidity) + "%"}</div> 
                <div>{"Rain: " + this.props.totalRain.toFixed(2) + " cm"}</div> 
                    </div>
        );
      }
  }


  render() {
    return (
        <div className="ForecastDay">
            {this.renderSummary()}
            {this.renderDetails()}
        </div>
    );
  }
}

ForecastDay.propTypes = {
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    totalRain: PropTypes.number,
    avgHumidity: PropTypes.number,
    iconId: PropTypes.string,
    dayOfWeek: PropTypes.number,
    units: PropTypes.oneOf(['C', 'F'])
}

export default ForecastDay;


