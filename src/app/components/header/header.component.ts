import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Share } from '@capacitor/share';

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
    let url = await this.shiftService.downloadExcel();

    try {
      await Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: ``,
        dialogTitle: 'Share with buddies',
      });
    } catch (error) {
      url.click();
    }
  }

}
