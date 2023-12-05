import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-where-is',
  templateUrl: './modal-where-is.component.html',
  styleUrls: ['./modal-where-is.component.scss']
})
export class ModalWhereIsComponent {
  
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close(false);
  }
}
