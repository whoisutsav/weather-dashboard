import React, { Component } from 'react';
import Current from './containers/Current.js'
import Header from './containers/Header.js'
import Forecast from './containers/Forecast.js'
import Footer from './containers/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Current/>
            <Forecast/>
            <Footer/>
        </div>
    );
  }
}


export default App;

