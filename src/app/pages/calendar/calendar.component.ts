import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weekdays } from 'moment';
import { Shift } from 'src/app/models/shifts';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  get shiftMonth() {
    return this.shiftService.month;
  }

  get currentDay() {
    if (this.shiftService.date.getMonth() === this.shiftMonth.getMonth()) {
      return this.shiftService.date.getDate();
    } else return false;
  }

  get monthDays() {
    return this.shiftService.daysOfMonth;
  }

  weekDays = [
    { day: 0, description: 'D' },
    { day: 1, description: 'S' },
    { day: 2, description: 'T' },
    { day: 3, description: 'Q' },
    { day: 4, description: 'Q' },
    { day: 5, description: 'S' },
    { day: 6, description: 'S' }
  ]

  constructor(private shiftService: ShiftsService,
    private router: Router) { }

  ngOnInit(): void {
    this.shiftService.updateCalendarMonth();
  }

  selectDate(day) {
    this.shiftService.setShiftDateTo(day.day, day.previousMonth);
    this.router.navigate(['/']);
  }

  toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

}
