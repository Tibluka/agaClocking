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


  startShiftHour = 0;
  startShiftMinute = 0;

  endShiftHour = 0;
  endShiftMinute = 0;

  today: Date = new Date();
  shiftForm: FormGroup = new FormGroup({
    startShift: new FormControl(''),
    activity: new FormControl(''),
    endShift: new FormControl(''),
    shiftId: new FormControl(''),
    overnight: new FormControl(false)
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
    debugger
  }

  cancel() {
    this.activeModal.close();
  }

  async updateShift() {
    if (this.shiftForm.valid) {
      if (this.shiftForm.get('overnight').value === true) {
        let nextDay = moment(this.shiftForm.get('endShift').value).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss');
        this.shiftForm.get('endShift').setValue(nextDay);
      }
      await this.shiftsService.updateShift(this.shiftForm.value);
      this.activeModal.close();
    }
  }

  changeHour(shift: string) {
    let shiftHour = 0;
    if (shift === 'endShift') {
      shiftHour = this.endShiftHour;
    } else shiftHour = this.startShiftHour;
    let sh = moment(this.shiftForm.get(shift).value).set('hours', Number(shiftHour)).format('YYYY-MM-DDTHH:mm:ss');
    this.shiftForm.get(shift).setValue(sh);
  }

  changeMinute(shift: string) {
    let shiftMinute = 0;
    if (shift === 'endShift') {
      shiftMinute = this.endShiftMinute;
    } else shiftMinute = this.startShiftMinute;
    let sm = moment(this.shiftForm.get(shift).value).set('minutes', Number(shiftMinute)).format('YYYY-MM-DDTHH:mm:ss');
    this.shiftForm.get(shift).setValue(sm);
  }
}
