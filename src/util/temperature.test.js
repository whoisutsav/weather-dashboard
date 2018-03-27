import {fromKelvinTo, toKelvinFrom} from './temperature.js';

describe("fromKelvinTo", () => {
    it("converts from Kelvin to Celsius", () => {
        expect(fromKelvinTo('C', 373)).toEqual(100);
    });
    it("converts from Kelvin to Farenheit", () => {
        expect(fromKelvinTo('F', 373)).toEqual(212);
    });
});

describe("toKelvinFrom", () => {
    it("converts from Celsius to Kelvin", () => {
        expect(toKelvinFrom('C', 100)).toEqual(373);
    });
    it("converts from Farenheit to Kelvin", () => {
        expect(toKelvinFrom('F', 212)).toEqual(373);
    });
});
