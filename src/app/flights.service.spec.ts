/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FlightsService } from './flights.service';

describe('Flights Service', () => {
  beforeEachProviders(() => [FlightsService]);

  it('should stat with an empty array of currentFLights ',
      inject([FlightsService], (service: FlightsService) => {
      let values = service.getFlights();
    expect(values.length).toEqual(0);
  }));

  it('currentFLights should store objects of type Flight',
      inject([FlightsService], (service: FlightsService) => {
      service.addFlight('test', 5);
      let values = service.getFlights();
      expect(values.length).toEqual(1);
      expect(values[0].name).toBeDefined();
      expect(values[0].distance).toBeDefined();
      expect(values[0].landed).toBeDefined();
  }));
});
