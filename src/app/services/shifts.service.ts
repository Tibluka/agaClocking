import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Shift, Shifts } from '../models/shifts';
import { GraphicsService } from './graphics.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private shiftsData: Shifts = new Shifts();
  private shiftDate: Date = new Date();
  private shiftMonth: Date = new Date();
  private totalHoursByMonth: string = '0';
  private monthDays = [];

  get daysOfMonth() {
    return this.monthDays;
  }

  get totalHoursMonth() {
    return this.totalHoursByMonth;
  }

  get totalTime() {
    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours, minutes };
    }
    let minutes = 0;
    this.shifts.map((shift: Shift) => { minutes += shift.totalTimeInMinutes });

    return toHoursAndMinutes(minutes);
  }

  get month() {
    const currentTime = new Date(); // adjusts current hours and minutes of the day
    let shiftDateHoursOk = new Date(this.shiftMonth.setHours(currentTime.getHours()));
    let shiftDateMinutesOk = new Date(shiftDateHoursOk.setMinutes(currentTime.getMinutes()));
    let shiftDateSecondsOk = new Date(shiftDateMinutesOk.setSeconds(currentTime.getSeconds()));
    return shiftDateSecondsOk;
  }

  get date() {
    const currentTime = new Date(); // adjusts current hours and minutes of the day
    let shiftDateHoursOk = new Date(this.shiftDate.setHours(currentTime.getHours()));
    let shiftDateMinutesOk = new Date(shiftDateHoursOk.setMinutes(currentTime.getMinutes()));
    let shiftDateSecondsOk = new Date(shiftDateMinutesOk.setSeconds(currentTime.getSeconds()));
    return shiftDateSecondsOk;
  }

  get shifts() {
    return this.shiftsData.shifts;
  }

  constructor(private http: HttpClient, private loadingService: LoadingService,
    private graphicsService: GraphicsService) { }

  async addNewShift(body) {
    this.loadingService.setStatus(true);
    await this.http.post(`${environment.url}/initiate-shift`, body).toPromise();
    this.listShifts();
  }

  async updateShift(body) {
    this.loadingService.setStatus(true);
    await this.http.post(`${environment.url}/update-shift`, body).toPromise();
    this.listShifts();
  }

  async deleteShift(shift: Shift) {
    this.loadingService.setStatus(true);
    await this.http.post(`${environment.url}/delete-shift`, { shiftId: shift._id.$oid }).toPromise();
    this.listShifts();
  }

  async listShifts() {
    this.loadingService.setStatus(true);
    this.shiftsData = new Shifts();
    const user = JSON.parse(localStorage.getItem('user_agaclocking'));
    const date = moment(this.date).format('YYYY-MM-DD');
    this.shiftsData = await this.http.get(`${environment.url}/list-shifts?date=${date}&userId=${user.id}`).toPromise() as any;
    this.loadingService.setStatus(false);
  }

  previousShiftDate() {
    let date = new Date(this.date);
    date.setDate(date.getDate() - 1);
    this.shiftDate = date;
    this.listShifts();
  }

  nextShiftDate() {
    let date = new Date(this.date);
    date.setDate(date.getDate() + 1);
    this.shiftDate = date;
    this.listShifts();
  }

  setShiftDateTo(date: number, previousMonth?: boolean) {
    let month = new Date(new Date(this.month).setMonth(this.month.getMonth() - (previousMonth ? 1 : 0)));
    let newDate = new Date(new Date(this.date).setMonth(month.getMonth()));
    newDate.setDate(date);
    this.shiftDate = newDate;
  }

  async updateCalendarMonth() {
    setTimeout(() => {
      this.loadingService.setStatus(true);
    }, 1);

    // local functions
    function subtractMonths(numOfMonths, date = new Date()) {
      date.setMonth(date.getMonth() - numOfMonths);
      return date;
    }
    function getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    }
    // local functions

    let lastDayOfMonth = new Date(this.shiftMonth.getFullYear(), this.shiftMonth.getMonth() + 1, 0).getDate();
    let days = [];
    let firstWeekDayOfMonth = getFirstDayOfMonth(this.shiftMonth.getFullYear(), this.shiftMonth.getMonth());

    let newShiftMonth = new Date(this.shiftMonth);
    const previousMonth = new Date(subtractMonths(1, newShiftMonth));
    let lastDayOfPreviousMonth = new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0).getDate();

    for (let index = 1; index < firstWeekDayOfMonth + 1; index++) {
      if (firstWeekDayOfMonth === 6) { continue };
      days.push({ day: lastDayOfPreviousMonth, previousMonth: true, nextMonth: false });
      lastDayOfPreviousMonth--;
    }

    days.reverse();

    for (let index = 0; index < lastDayOfMonth; index++) {
      days.push({ day: index + 1, previousMonth: false, nextMonth: false, shifts: [] });
    }

    let shiftReturn = await this.getTotalHoursByMonth(this.month.getFullYear(), this.month.getMonth() + 1);
    days = days.map((objDay) => {
      const shiftList: Array<Shift> = shiftReturn.shifts.
        filter((shift: Shift) => new Date(shift.startShift).getDate() === objDay.day);
      if (shiftList.length > 0) {
        objDay.shifts = shiftList;
      }
      return objDay;
    })
    this.monthDays = days;
    this.graphicsService.setChartByMonth(this.shiftMonth.getFullYear(), this.shiftMonth.getMonth() + 1);
  }

  async getTotalHoursByMonth(year: number, month: number) {
    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours, minutes };
    }

    const user = JSON.parse(localStorage.getItem('user_agaclocking'));

    const totalMinutes = await this.http.get(`${environment.url}/get-shifts-by-month?year=${year}&month=${month}&userId=${user.id}`).toPromise() as any;
    let minutes = 0;
    totalMinutes.shifts.forEach(sh => { minutes += sh.totalTimeInMinutes });

    let obj = toHoursAndMinutes(minutes);
    this.totalHoursByMonth = `${obj.hours}:${obj.minutes}`;
    this.loadingService.setStatus(false);
    return totalMinutes;
  }

  nextShiftMonth() {
    let month = new Date(this.month);
    month.setMonth(month.getMonth() + 1);
    this.shiftMonth = month;
    this.updateCalendarMonth();
  }

  previousShiftMonth() {
    let month = new Date(this.month);
    month.setMonth(month.getMonth() - 1);
    this.shiftMonth = month;
    this.updateCalendarMonth();
  }

  async downloadExcel() {
    this.loadingService.setStatus(true);
    const user = this.graphicsService.selectedUser;
    try {
      let { base64 } = await this.http.get(`${environment.url}/download-shifts-by-month?year=${this.month.getFullYear()}&month=${this.month.getMonth() + 1}&userId=${user}`).toPromise() as { base64: string };
      base64 = base64.substr(2, base64.length - 3);
      /*   debugger
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/xlsx' });
   */
      const blob = new Blob([base64], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'nome_do_arquivo.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      this.loadingService.setStatus(false);
      return blob;
    } catch (error) {
      this.loadingService.setStatus(false);
    }
  }

}
