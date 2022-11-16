import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agaclocking';

  get loadingStatus(){
    return this.loadingService.status;
  }

  constructor(private loadingService: LoadingService){

  }
}
