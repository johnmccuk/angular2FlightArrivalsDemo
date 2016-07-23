/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import { FlightsService } from '../flights.service';

describe('Component: Flights', () => {
  it('should create an instance', () => {
    let component = new FlightsComponent(new FlightsService());
    expect(component).toBeTruthy();
  });
});
