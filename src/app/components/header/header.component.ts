import { Component, OnInit } from '@angular/core';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get currentRoute() {
    return location.pathname;
  }
  get viewType() {
    if (this.currentRoute === '/calendar') {
      return 'Mês'
    } else {
      return 'Dia'
    }
  }

  get shiftMonth() {
    return this.shiftService.month;
  }

  constructor(private shiftService: ShiftsService) { }

  ngOnInit(): void {
  }

  previousMonth() {
    this.shiftService.previousShiftMonth();
  }

  nextMonth() {
    this.shiftService.nextShiftMonth();
  }

}
