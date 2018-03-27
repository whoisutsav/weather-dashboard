import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Degree from './degree.js';


describe('Degree', () => {
    it('Renders Farenheit', function() {
        let e = shallow(<Degree units='C' value={373.1}/>);
        expect(e.text()).toEqual('100° C');
    });
    it('Renders Celsius', () => {
        let e = shallow(<Degree units='F' value={373.1}/>);
        expect(e.text()).toEqual('212° F');
    });
});
