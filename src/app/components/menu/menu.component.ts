import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MenuService } from 'src/app/services/menu.service';
import { ShiftsService } from 'src/app/services/shifts.service';
import { UserService } from 'src/app/services/user.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get date() {
    return this.shiftsService.shiftMonth;
  }

  options = [
    {
      description: 'Baixar relatório mensal',
      img: 'share-icon.svg',
      function: this.download,
      this: this
    },
    {
      description: 'Logout',
      img: 'logout.svg',
      function: this.logout,
      this: this
    }
  ]

  get loggedUser() {
    debugger
    return this.userService.user;
  }

  get menuState() {
    return this.menuService.state;
  }

  constructor(private menuService: MenuService,
    private shiftsService: ShiftsService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(this) {
    const component = this;
    localStorage.clear();
    component.this.router.navigate(['/login']);
    component.this.close();
  }

  close() {
    this.menuService.setMenuState(false);
  }

  async download(this) {
    const component = this;
    let blob = await component.this.shiftsService.downloadExcel();
    saveAs(blob, `${moment(this.date).format('MM-YYYY')}.xlsx`);
    component.this.close();
  }

}
