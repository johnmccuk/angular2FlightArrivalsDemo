/* tslint:disable:no-unused-variable */

import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';
import {Flight} from './flight';

describe('Flight', () => {

    it('should create an instance', () => {
        expect(new Flight()).toBeTruthy();
    });

    it('should store passed values', () => {
        let flight = new Flight('test', 5, true);
        expect(flight.name).toEqual('test');
        expect(flight.distance).toEqual(5);
        expect(flight.landed).toBe(true);
    });

    it('should land after distance reaches 0', (done) => {
        let flight = new Flight('test', 100);
        expect(flight.landed).toBe(false);
        expect(flight.arrivalTime).not.toBe('arrived');

        setTimeout(() => {
            expect(flight.landed).toBe(true);
            expect(flight.arrivalTime).toBe('arrived');
            done();
        }, 1000);
    });
});
