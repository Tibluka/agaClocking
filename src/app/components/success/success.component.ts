import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { ValidatorService } from '../../services/validator/validator.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent extends ValidatorService {

  email: string = '';
  showInputEmail: boolean = null;

  get modalContent() {
    return this.modalService.modalContent;
  }

  constructor(private modalService: ModalService,
    private router: Router) {
    super();
  }

  ngOnInit(): void {

  }


  close() {
    this.clickBtnTag('fechar-dialog-sucesso');
    this.modalService.close(true);
    this.router.navigate([''])
  }


}
