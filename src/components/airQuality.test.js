import React from 'react';
import { AirQuality } from './airQuality.js';
import { shallow } from 'enzyme';

describe("AirQuality", () => {
    it("displays so2", () => {
        const e = shallow(<AirQuality
            so2={{data:[{value: 1.2345}]}}/>);
        expect(e.find(".AirQuality-so2").text()).toContain("1.23");
    });

});
