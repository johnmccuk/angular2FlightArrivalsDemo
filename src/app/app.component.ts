import { Component } from '@angular/core';
import { FlightsComponent } from './imports-facade';
//import {FlightsService} from './flights.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FlightsComponent],
  //providers: [FlightsService]
})
export class AppComponent {

}
