import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/graphics';
import { Shift } from 'src/app/models/shifts';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {


  @Input() user: User = new User();
  @Input() index: number;

  @Output() deleteOutput = new EventEmitter();
  @Output() updateOutput = new EventEmitter();

  deleteState: boolean = false;

  constructor(private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  swipeRight() {
    this.deleteState = true;
  }

  swipeLeft() {
    this.deleteState = false;
  }

  deleteUser() {
    this.deleteOutput.emit(this.user);
  }

  updateUser() {
    this.updateOutput.emit(this.user);
  }

}
