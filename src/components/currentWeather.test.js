import React from 'react';
import { shallow } from 'enzyme';
import { CurrentWeather } from './currentWeather.js';

describe("CurrentWeather", () => {
    it("Renders icon", () => {
       const e = shallow(<CurrentWeather currentWeather={{weather:[{icon:"a"}], main:{temp:5}}}/>);
       expect(e.find(".CurrentWeather-icon").prop("src")).toContain("img/w/a.png"); 

    });
});
