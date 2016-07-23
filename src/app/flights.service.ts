import {Injectable} from '@angular/core';
import {Flight} from './flight';

@Injectable()
export class FlightsService {

  private currentFlights: Flight[] = [];

  constructor() { }

  addFlight(name: string, distance: number): void {
    this.currentFlights.push(new Flight(name, distance));
  }

  getFlights(): Array<Flight> {
    return this.currentFlights;
  }

}
