import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Shift, Shifts } from '../models/shifts';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private shiftsData: Shifts = new Shifts();
  private shiftDate: Date = new Date();

  get date() {
    return this.shiftDate;
  }

  get shifts() {
    return this.shiftsData.shifts;
  }

  constructor(private http: HttpClient) { }

  async addNewShift(body) {
    await this.http.post(`${environment.url}/initiate-shift`, body).toPromise();
    this.listShifts();
  }

  async terminateShift(body) {
    await this.http.post(`${environment.url}/terminate-shift`, body).toPromise();
    this.listShifts();
  }

  async deleteShift(shift: Shift) {
    await this.http.post(`${environment.url}/delete-shift`, { shiftId: shift._id.$oid }).toPromise();
    this.listShifts();
  }

  async listShifts() {
    const date = moment(this.date).format('YYYY-MM-DD');
    this.shiftsData = await this.http.get(`${environment.url}/list-shifts?date=${date}`).toPromise() as any;
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

}
