import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ProjectsService } from 'src/app/services/projects.service';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-update-shift',
  templateUrl: './update-shift.component.html',
  styleUrls: ['./update-shift.component.scss']
})
export class UpdateShiftComponent implements OnInit {


  hour = 0;
  minute = 0;
  today: Date = new Date();
  shiftForm: FormGroup = new FormGroup({
    endShift: new FormControl(null),
    shiftId: new FormControl('')
  });

  get shiftDate() {
    return this.shiftsService.date;
  }

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

  constructor(private activeModal: NgbActiveModal,
    private shiftsService: ShiftsService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.activeModal.close();
  }

  async updateShift() {
    if (this.shiftForm.valid) {
      if(this.shiftForm){

      }
      await this.shiftsService.terminateShift(this.shiftForm.value);
      this.activeModal.close();
    }
  }

  changeHour() {
    this.shiftForm.get('endShift').setValue(moment().set('hours', Number(this.hour)).format('YYYY-MM-DDTHH:mm:ss'));
  }

  changeMinute() {
    this.shiftForm.get('endShift').setValue(moment().set('minutes', Number(this.minute)).format('YYYY-MM-DDTHH:mm:ss'));
  }
}
