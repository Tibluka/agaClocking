import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  points = new Array(8);

  get delayMessageText() {
    return this.loadingService.delayMessageText;
  }

  get messageOnDelayedRequests() {
    return this.loadingService.messageOnDelayedRequests;
  }

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
