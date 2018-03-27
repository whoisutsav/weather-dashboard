import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastDay from '../components/forecastDay.js';
import './Forecast.css';

class Forecast extends Component { 
    getForecastData(daysFromNow) {
        const forecasts = this.props.forecast.list.slice(8*daysFromNow - 8, 8*daysFromNow);

        const maxTemp = forecasts.map((forecast) => {
            return forecast.main.temp;
        }).reduce((max, cur) => {
            return Math.max(max, cur); 
        });

        const minTemp = forecasts.map((forecast) => {
            return forecast.main.temp;
        }).reduce((min, cur) => {
            return Math.min(min, cur); 
        });

        const avgHumidity = forecasts.map((forecast) => {
            return forecast.main.humidity;
        }).reduce((acc, cur) => {
            return acc + cur;
        }, 0)/forecasts.length;

        const totalRain = forecasts.map((forecast) => {
            return forecast.rain && forecast.rain['3h'] ? forecast.rain['3h'] : 0;
        }).reduce((acc, cur) => {
            return acc + cur;
        }, 0)/10;

        const icon = forecasts.map((forecast) => {
            return forecast.weather[0].icon;
        }).reduce((acc, cur) => {
           return cur[2] === 'd' && cur > acc ? cur : acc; 
        }, '01d');

        const dayOfWeek = (new Date().getDay() + daysFromNow) % 7;

        return {
            maxTemp: maxTemp,
            minTemp: minTemp,
            avgHumidity: avgHumidity,
            totalRain: totalRain,
            icon: icon,
            dayOfWeek: dayOfWeek
        }
    }

    renderForecast(daysFromNow) {
        const data = this.getForecastData(daysFromNow);
        return (
            <div key={daysFromNow}>
                <ForecastDay maxTemp={data.maxTemp}
                            minTemp={data.minTemp}
                            iconId={data.icon}
                            totalRain={data.totalRain}
                            avgHumidity={data.avgHumidity}
                            dayOfWeek={data.dayOfWeek}
                            units={this.props.units}/>
            </div>
        )
    }

  render() {
      if (!this.props.forecast) {
          return null;
      }

      return (
          <div className="Forecast">
          {
              [1,2,3,4,5].map((day) => {
                  return this.renderForecast(day);
              })
          }
          </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        units: state.units,
        forecast: state.forecast
    }
}

export default connect(mapStateToProps, {})(Forecast)

