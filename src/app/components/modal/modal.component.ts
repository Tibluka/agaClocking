import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() component: any = null;

  get transition() {
    return this.modalService.transition;
  }

  get modalContent() {
    return this.modalService.modalContent;
  }

  constructor(private modalService: ModalService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.setTransition(true)
    }, 1);
  }

  close() {
    if (this.transition) {
      this.modalService.close(false);
    }
  }

}
