import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();

  get shifts() {
    return this.shiftsService.shifts;
  }

  constructor(private shiftsService: ShiftsService) {
    this.shiftsService.listShifts(moment(new Date()).format('YYYY-MM-DD'));
  }

  ngOnInit(): void {
  }

  calculateDifference(shift) {
    let qtdHours = 0;
    if (shift.endShift !== '') {
      qtdHours = shift.startShift.getTime() - shift.endShift.getTime();
      return new Date(qtdHours).getHours();
    } else {
      return 'Em aberto';
    }
  }

}
