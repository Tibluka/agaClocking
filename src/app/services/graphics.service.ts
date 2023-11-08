import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
import { environment } from 'src/environments/environment';
import { User, Users } from '../models/graphics';
import { Shift } from '../models/shifts';
import { LoadingService } from './loading.service';
import { ShiftsService } from './shifts.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private usersData: Users = new Users();
  private hoursByProjectData: Array<{ project: string, totalInMinutes: number }> = [];
  private selectedUserData = '';

  get user() {
    return this.userService.user;
  }

  get selectedUser() {
    return this.selectedUserData;
  }

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
    private loadingService: LoadingService,
    private userService: UserService) {
    const user = JSON.parse(localStorage.getItem('user_agaclocking'));
    if (user) this.selectedUserData = user.id;
  }

  async listUsers(currentDate: Date) {
    this.loadingService.setStatus(true);
    this.usersData = await
      this.http
        .get(`${environment.url}/list-users-per-month?userId=${this.user.id}&currentMonth=${currentDate.getMonth()}&currentYear=${currentDate.getFullYear()}`)
        .toPromise() as any;
    this.loadingService.setStatus(false);
  }

  async setChartByMonth(year: number, month: number, userId?: string) {
    this.loadingService.setStatus(true);
    debugger
    let params = new HttpParams()
      .set('year', year)
      .set('month', month)

    if (userId) {
      params = new HttpParams()
        .set('year', year)
        .set('month', month)
        .set('userId', userId)
    } else {
      params = new HttpParams()
        .set('year', year)
        .set('month', month)
    }

    const { hours } =
      await this.http.get(`${environment.url}/get-all-shifts-by-projects-month`, { params }).toPromise() as any;
    this.hoursByProjectData = hours;

    this.loadingService.setStatus(false);
  }

  toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

}
