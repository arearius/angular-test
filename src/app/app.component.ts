import { Component, VERSION } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(private calendar: NgbCalendar) {
    
  }

  name = 'Angular ' + VERSION.major;
  model = {
    left: true,
    middle: false,
    right: false
  };
  date: {year: number, month: number};
  model_calendar: NgbDateStruct;
  selectToday() {
    this.model_calendar = this.calendar.getToday();
  }
}
