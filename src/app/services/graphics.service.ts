import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, Users } from '../models/graphics';
import { Shift } from '../models/shifts';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private usersData: Users = new Users();
  private hoursByProjectData: Array<{ project: string, totalInMinutes: number }> = [];

  get hoursByProject() {
    return this.hoursByProjectData;
  }

  get totalHoursByMonth() {
    const hours = this.hoursByProjectData.reduce((prev, curr) => { return prev + curr.totalInMinutes }, 0)
    return hours;
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
    this.loadingService.setStatus(false);
  }

  async setChartByMonth(year: number, month: number) {
    this.loadingService.setStatus(true);

    const { hours } = await this.http.get(`${environment.url}/get-all-shifts-by-projects-month?year=${year}&month=${month}`).toPromise() as any;
    this.hoursByProjectData = hours;

    this.loadingService.setStatus(false);
  }

  toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }
  
}
