import {Component, OnInit} from '@angular/core';
import {FlightsService} from '../flights.service';
import {Flight} from '../flight';

@Component({
  moduleId: module.id,
  selector: 'app-flights',
  templateUrl: 'flights.component.html',
  styleUrls: ['flights.component.css'],
  providers: [FlightsService]
})
export class FlightsComponent implements OnInit {
    public currentFlights: Array<Flight> = [];

    constructor(private flightsService: FlightsService) {
        this.currentFlights = this.flightsService.getFlights();
    }

    /*
        not sure what this is for
    */
    ngOnInit() {}

    add(): void {
      this.flightsService.addFlight(this.generateName(), this.generateDistance());
      this.sort();
    }

    sort(): void {
        this.currentFlights.sort(function(a, b) {
          return a.distance - b.distance;
        });
    }

    private generateDistance(): number {
        return Math.floor((Math.random() * 20000) + 1);
    }

    private generateName(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3) + Math.floor((Math.random() * 1000) + 1);
    }
}
