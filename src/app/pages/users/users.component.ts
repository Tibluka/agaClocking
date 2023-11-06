import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  get userList() {
    return this.userService.userList;
  }

  constructor(private userService: UserService) {
    this.userService.listUsers();
  }

  ngOnInit(): void {
  }

}
