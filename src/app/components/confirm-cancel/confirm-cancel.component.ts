import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ValidatorService } from '../../services/validator/validator.service';


@Component({
  selector: 'app-confirm-cancel',
  templateUrl: './confirm-cancel.component.html',
  styleUrls: ['./confirm-cancel.component.scss']
})
export class ConfirmCancelComponent extends ValidatorService {

  constructor(private modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
  }


  cancel() {
    this.clickBtnTag('cancelar-acao');
    this.modalService.close(false);
  }

  confirm() {
    this.clickBtnTag('confirm-cancelamento');
    this.modalService.close(true);
  }
}
