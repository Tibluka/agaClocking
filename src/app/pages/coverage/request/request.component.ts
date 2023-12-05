import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoverageService } from '../../../services/coverage/coverage.service';
import { ValidatorService } from '../../../services/validator/validator.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent extends ValidatorService {
  dataLayer = window['dataLayer'];

  @Output() nextEmitter = new EventEmitter();

  isInputTouched: boolean = false;

  requestForm: FormGroup = new FormGroup({
    cotacao: new FormControl('', Validators.required),
    oferta: new FormControl('', Validators.required),
    alteracao: new FormControl('', Validators.required),
    semCotacao: new FormControl(false)
  })

  showResults: boolean = false;
  disable: boolean = false;

  constructor(private router: Router, private coverageService: CoverageService) {
    super();
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('promoParams'));
     window['dataLayer'].push({
       event: 'page_view',
       page_location: location.href,
       timestamp: new Date().getTime(),
       channel: 'col',
       brand: 'porto',
       vertical: 'seguros',
       product: '',
       product_identify: '',
       product_category: '',
       product_user_profile: '',
       client_id: '*********-' + user?.cpf?.substr(9) || '',
       user_susep: user?.corsus || '',
       user_sucursal: '',
       user_logged: true
     })
  }

  async search() {
    this.clickBtnTag('solicitar_cobertura');
    if (this.requestForm.invalid) {
      return
    } else {
      let cotacao = this.requestForm.get('cotacao').value;
      let alteracao = this.requestForm.get('alteracao').value;
      let oferta = this.requestForm.get('oferta').value;
      if (cotacao && alteracao && oferta) {
        this.router.navigate(['/solicitation'], {
          queryParams: {
            numeroCotacao: this.requestForm.get('cotacao').value,
            alteracao: this.requestForm.get('alteracao').value,
            oferta: this.requestForm.get('oferta').value
          }
        })
      } else {
        this.router.navigate(['/solicitation']);
      }

    }
  }

  clearField(field: string) {
    if (field == 'cotacao') {
      this.requestForm.get('cotacao').setValue('');
    } else if (field == 'oferta') {
      this.requestForm.get('oferta').setValue('');
    } else if (field == 'alteracao') {
      this.requestForm.get('alteracao').setValue('');
    } else return;
  }

  disableField() {
    this.clickCheckboxTag(this.requestForm.get('semCotacao').value, 'sem-cotacao');
    if (this.requestForm.get('semCotacao').value == true) {
      this.requestForm.get('cotacao').disable();
      this.requestForm.get('oferta').disable();
      this.requestForm.get('alteracao').disable();
      this.disable = true;
    } else {
      this.requestForm.get('cotacao').enable();
      this.requestForm.get('oferta').enable();
      this.requestForm.get('alteracao').enable();
      this.disable = false;
    }
  }

  setButtonDisabled() {
    if ((!this.requestForm.get('cotacao').value || !this.requestForm.get('oferta').value ||
      !this.requestForm.get('alteracao').value) && !this.requestForm.get('semCotacao').value) {
      return true;
    } else if (this.requestForm.get('semCotacao').value) {
      return false;
    } else if ((this.requestForm.get('cotacao').value || this.requestForm.get('oferta').value ||
      this.requestForm.get('alteracao').value) && !this.requestForm.get('semCotacao').value) {
      return false;
    } else {
      return false;
    }


  }
}
