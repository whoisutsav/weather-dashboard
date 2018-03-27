import React from 'react';
import { shallow } from 'enzyme';
import { NotificationForm } from './notificationForm.js';

describe('NotificationForm', () => {
    it('Only allows numeric values', () => {
        const e = shallow(<NotificationForm/>);
        const input = e.find('.NotificationForm-input');

        input.simulate('change', {target:{value:"ABC"}});
        expect(e.state('temp')).toEqual('');

        input.simulate('change', {target:{value:"-123"}});
        expect(e.state('temp')).toEqual('-123');
    });

    it('Dispatches an action on submit', () => {
        const mockFn = jest.fn();
        const e = shallow(<NotificationForm createNotification={mockFn} units='C'/>);

        e.find('.NotificationForm-input').simulate('change', {target:{value:"10"}});
        e.find('.NotificationForm-button').simulate('click');

        expect(mockFn).toBeCalledWith(283);
    });
});
