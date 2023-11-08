import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.scss']
})
export class ChooseUserComponent implements OnInit {

  selectedUser: string = null;

  get userList() {
    return this.userService.userList.filter(u => u.active && u.userType !== 'READER');
  }

  constructor(private ngbActiveModal: NgbActiveModal,
    private userService: UserService) {
    this.userService.listUsers();
  }

  ngOnInit(): void {
  }

  confirm() {
    if (!this.selectedUser) {
      alert('Selecione ao menos um usuário');
      return;
    }
    this.ngbActiveModal.close(this.selectedUser['_id'].$oid);
  }

  close() {
    this.ngbActiveModal.close();
  }

}
