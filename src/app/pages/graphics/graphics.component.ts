import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { User } from 'src/app/models/graphics';
import { GraphicsService } from 'src/app/services/graphics.service';
import { ShiftsService } from 'src/app/services/shifts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  selectedUser: string = '';

  get user() {
    return this.userService.user;
  }

  get users() {
    return this.userService.userList;
  }

  get shiftMonth() {
    return this.shiftsService.month;
  }

  get totalHoursByMonth() {
    return this.graphicsService.totalHoursByMonth;
  }

  get hoursByProject() {
    return this.graphicsService.hoursByProject;
  }

  get highestAmountHourProject() {
    const arr = this.graphicsService.hoursByProject;
    const highest = Math.max(...arr.map(o => o.totalInMinutes))

    if (highest === -Infinity) { return 0 }
    return this.graphicsService.toHoursAndMinutes(highest).hours + 10;
  }

  constructor(private graphicsService: GraphicsService,
    private shiftsService: ShiftsService,
    private userService: UserService) {
    this.userService.listUsers();
    this.graphicsService.setChartByMonth(this.shiftMonth.getFullYear(), this.shiftMonth.getMonth() + 1);
    this.graphicsService.listUsers(this.shiftsService.date);
  }

  ngOnInit(): void { }

  getPercentage(totalInMinutes: number) {
    const percentage = (this.graphicsService.toHoursAndMinutes(totalInMinutes).hours / this.highestAmountHourProject) * 100;
    return percentage;
  }

  getTotalInHours(totalInMinutes: number) {
    const zbm = this.graphicsService.toHoursAndMinutes(totalInMinutes).minutes < 10 ? '0' : '';
    return `${this.graphicsService.toHoursAndMinutes(totalInMinutes).hours}:${zbm}${this.graphicsService.toHoursAndMinutes(totalInMinutes).minutes}h`
  }

  changeUser(selectedUserId: string) {
    this.graphicsService.setChartByMonth(
      this.shiftMonth.getFullYear(),
      this.shiftMonth.getMonth() + 1,
      selectedUserId
    );
  }

}
