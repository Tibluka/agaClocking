import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Shift, Shifts } from '../models/shifts';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private shiftsData: Shifts = new Shifts();
  private shiftDate: Date = new Date();
  private totalHoursByMonth: number = 0;

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

  constructor(private http: HttpClient) { }

  async addNewShift(body) {
    await this.http.post(`${environment.url}/initiate-shift`, body).toPromise();
    this.listShifts();
  }

  async updateShift(body) {
    await this.http.post(`${environment.url}/update-shift`, body).toPromise();
    this.listShifts();
  }

  async deleteShift(shift: Shift) {
    await this.http.post(`${environment.url}/delete-shift`, { shiftId: shift._id.$oid }).toPromise();
    this.listShifts();
  }

  async listShifts() {
    this.shiftsData = new Shifts();
    const date = moment(this.date).format('YYYY-MM-DD');
    this.shiftsData = await this.http.get(`${environment.url}/list-shifts?date=${date}`).toPromise() as any;
  }

  async getTotalHoursByMonth(month: number) {
    const totalHours = await this.http.get(`${environment.url}/get-total-hours-by-month?month=${month}`).toPromise() as any;
    this.totalHoursByMonth = totalHours;
  }

  async previousShiftDate() {
    let date = new Date(this.date);
    date.setDate(date.getDate() - 1);
    this.shiftDate = date;
    await this.listShifts();
  }

  async nextShiftDate() {
    let date = new Date(this.date);
    date.setDate(date.getDate() + 1);
    this.shiftDate = date;
    await this.listShifts();
  }

}
