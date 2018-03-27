import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUnits } from '../actions/index.js'
import './params.css';

export class Params extends Component {
    constructor(props) {
        super(props);
        this.switchToFarenheit = this.switchToFarenheit.bind(this);
        this.switchToCelsius = this.switchToCelsius.bind(this);

    }

    switchToFarenheit() {
        this.props.updateUnits('F');
    }

    switchToCelsius() {
        this.props.updateUnits('C');
    }


    
  render() {
    return (
        <div className="Params">
           <span className="Params-city">Rome, Italy</span> 
            <span className="Params-celsius" onClick={this.switchToCelsius} bold={(this.props.units === 'C').toString()}>°C</span>
            <span className="Params-separator">{" / "}</span>
            <span className="Params-farenheit" onClick={this.switchToFarenheit} bold={(this.props.units === 'F').toString()}>°F</span>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        units: state.units
    }
}


const mapDispatchToProps = {
    updateUnits
}

export default connect(mapStateToProps, mapDispatchToProps)(Params) 

