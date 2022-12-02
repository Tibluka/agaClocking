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
      return user;
    });
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  async listUsers() {
    this.loadingService.setStatus(true);
    this.usersData = await this.http.get(`${environment.url}/list-users`).toPromise() as any;
    console.log(this.users);

    this.loadingService.setStatus(false);
  }

}
