import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-new-shift',
  templateUrl: './new-shift.component.html',
  styleUrls: ['./new-shift.component.scss']
})
export class NewShiftComponent implements OnInit {

  hour = 0;
  minute = 0;
  today: Date = new Date();
  shiftForm: FormGroup = new FormGroup({
    startShift: new FormControl(0),
    activities: new FormControl(''),
    project: new FormControl('MERYTU')
  });

  get hours() {
    let hours = new Array(24);
    for (let index = 0; index < hours.length; index++) {
      hours[index] = index;
    }
    return hours;
  }

  get minutes() {
    let minutes = new Array(60);
    for (let index = 0; index < minutes.length; index++) {
      minutes[index] = index;
    }
    return minutes;
  }

  constructor(private activeModal: NgbActiveModal) {
    this.shiftForm.get('startShift').setValue(moment(new Date()).format('YYYY/MM/DDTHH:mm:SS'))
  }

  ngOnInit(): void {
  }

  cancel() {
    this.activeModal.close();
  }

  addShift() {
    this.activeModal.close();
  }

  changeHour() {
    this.shiftForm.get('startShift').setValue(moment().set('hours', Number(this.hour)).format('YYYY-MM-DDTHH:mm:SS'));
  }
  changeMinute() {
    this.shiftForm.get('startShift').setValue(moment().set('minutes', Number(this.minute)).format('YYYY-MM-DDTHH:mm:SS'));
  }

}
