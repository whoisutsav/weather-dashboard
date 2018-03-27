import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from './alert.js';

describe("Alert", () => {
    it("Renders alert", () => {
        const e = shallow(<Alert notification={{alerts:{key:"val"}}}/>);
        expect(e.find(".Alert-text").text()).toContain("Temperature alert");
    });
});
