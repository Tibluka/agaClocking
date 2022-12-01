import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weekdays } from 'moment';
import { CalendarDay } from 'src/app/models/calendar';
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
    { day: 0, description: 'Dom.' },
    { day: 1, description: 'Seg.' },
    { day: 2, description: 'Ter.' },
    { day: 3, description: 'Qua.' },
    { day: 4, description: 'Qui.' },
    { day: 5, description: 'Sex.' },
    { day: 6, description: 'Sáb.' }
  ]

  constructor(private shiftService: ShiftsService,
    private router: Router) { }

  ngOnInit(): void {
    this.shiftService.updateCalendarMonth();
  }

  selectDate(day: CalendarDay) {
    this.shiftService.setShiftDateTo(day.day, day.previousMonth);
    this.router.navigate(['/']);
  }

  toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

}
