import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
  
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close(false);
  }
}
