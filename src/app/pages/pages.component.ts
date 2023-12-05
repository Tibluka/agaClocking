import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { TokenService } from '../services/authentication/token.service';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  status: boolean = false;

  get modalState() {
    return this.modalService.state.value.modalState;
  }

  get component() {
    return this.modalService.component;
  }

  constructor(private modalService: ModalService,
    private tokenService: TokenService,
    private loadingService: LoadingService) {
    this.tokenService.setToken();
    this.loadingService.status.subscribe((status: boolean) => {
      this.status = status;
    })
  }

}
