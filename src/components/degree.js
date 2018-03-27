import { Component } from 'react';
import { fromKelvinTo } from '../util/temperature.js';
import PropTypes from 'prop-types'

class Degree extends Component {

    render() {
        switch (this.props.units) {
            case 'F':
                return fromKelvinTo('F', this.props.value) + '° F';
            case 'C':
            default:
                return fromKelvinTo('C', this.props.value) + '° C';
    }
  }
}

Degree.propTypes = {
    units: PropTypes.oneOf(['C', 'F']),
    value: PropTypes.number // Kelvin
}

export default Degree;
