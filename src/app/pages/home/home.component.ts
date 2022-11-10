import { Component, OnInit } from '@angular/core';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();

  get shifts() {
    return this.shiftsService.shifts;
  }

  constructor(private shiftsService: ShiftsService) { }

  ngOnInit(): void {
  }

}
