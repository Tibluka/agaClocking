import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { environment } from 'src/environments/environment';
import { User, Users } from '../models/graphics';
import { Shift } from '../models/shifts';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private usersData: Users = new Users();
  private chartDataSets: Array<ChartDataSets> = [];

  get charts() {
    return this.chartDataSets;
  }

  get users() {
    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours, minutes };
    }

    return this.usersData.users.map((user: User) => {
      let totalTimeInMinutes = 0;
      user.shifts.forEach((shift: Shift) => {
        totalTimeInMinutes += shift.totalTimeInMinutes;
      });
      user.totalTime = `${toHoursAndMinutes(totalTimeInMinutes).hours}:${toHoursAndMinutes(totalTimeInMinutes).minutes}hrs`
      user.totalTimeInMinutes = totalTimeInMinutes;
      return user;
    });
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  async listUsers() {
    this.loadingService.setStatus(true);
    this.usersData = await this.http.get(`${environment.url}/list-users`).toPromise() as any;
    this.chartDataSets = this.users.map(user => {
      let chartDataSet: ChartDataSets = {};
      chartDataSet['data'] = [Number(user.totalTimeInMinutes)];
      chartDataSet['label'] = user.name;
      return chartDataSet;
    })
    this.loadingService.setStatus(false);
  }

}
