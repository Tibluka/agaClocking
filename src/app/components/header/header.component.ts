import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ShiftsService } from 'src/app/services/shifts.service';
import { saveAs } from 'file-saver';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get user() {
    return this.loginService.user;
  }

  get currentRoute() {
    return location.pathname;
  }
  get viewType() {
    if (this.currentRoute !== '/') {
      return 'Mês'
    } else {
      return 'Dia'
    }
  }

  get shiftMonth() {
    return this.shiftService.month;
  }

  constructor(private shiftService: ShiftsService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  previousMonth() {
    this.shiftService.previousShiftMonth();
  }

  nextMonth() {
    this.shiftService.nextShiftMonth();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async download() {
    let blob = await this.shiftService.downloadExcel();
    saveAs(blob, `${moment(this.shiftMonth).format('MM-YYYY')}.xlsx`);
  }

}
