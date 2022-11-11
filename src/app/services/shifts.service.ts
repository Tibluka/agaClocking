import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Shifts } from '../models/shifts';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private shiftsData: Shifts = new Shifts();
  private shiftDate: Date;

  get date() {
    return this.shiftDate;
  }

  get shifts() {
    return this.shiftsData.shifts;
  }

  constructor(private http: HttpClient) { }

  async addNewShift(body) {
    const shift = await this.http.post(`${environment.url}/initiate-shift`, body).toPromise();
  }

  async listShifts(date: string) {
    this.shiftsData = await this.http.get(`${environment.url}/list-shifts?date=${date}`).toPromise() as any;
  }

}
