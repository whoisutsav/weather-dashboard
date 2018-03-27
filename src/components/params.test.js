import React from 'react';
import { shallow } from 'enzyme';
import { Params } from './params.js'; 

describe("Params", () => {
    it("Dispatches action on units change", () => {
        const mockFn = jest.fn();
        const e = shallow(<Params updateUnits={mockFn}/>);

        e.find('.Params-farenheit').simulate('click');
        expect(mockFn).toBeCalledWith('F');
    });
});
