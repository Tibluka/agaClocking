import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import moment from 'moment';

import { CustomOption } from '../../../models/customOption';
import { CoverageService } from '../../../services/coverage/coverage.service';
import { ValidatorService } from '../../../services/validator/validator.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent extends ValidatorService {

  @Output() nextEmitter = new EventEmitter();

  get results() {
    return this.coverageService.result;
  }

  consultForm: FormGroup = new FormGroup({
    tipoBusca: new FormControl('', Validators.required),
    busca: new FormControl('', Validators.required),
  })

  showResults: boolean = false;
  noResults: boolean = false;
  disable: boolean = true;
  today = new Date();
  yearAgo: string = '';
  dataInicioReferencia: string = '';
  dataFinalReferencia: string = '';
  listActive = [];

  tipoBuscaOptions: Array<CustomOption> = [
    new CustomOption(false, 'Nº cobertura', 'numeroCoberturaProvisoria', 'tipoBusca'),
    new CustomOption(false, 'CPF / CNPJ', 'cpfCnpj', 'tipoBusca'),
    new CustomOption(false, 'Chassi', 'chassi', 'tipoBusca'),
    new CustomOption(false, 'Placa', 'placa', 'tipoBusca'),
    new CustomOption(false, 'Nota fiscal', 'notaFiscal', 'tipoBusca'),
    new CustomOption(false, 'Data saída concessionária', 'dataSaidaConcessionaria', 'tipoBusca'),
  ];

  constructor(private router: Router,
    private coverageService: CoverageService) {
    super();
    this.yearAgo = moment(this.today).subtract(1, 'year').format('YYYY-MM-DD').toString();
  }

  ngOnInit(): void {
    this.enableField();
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
    this.clickBtnTag('buscar-cobertura');

    if (this.dataInicioReferencia !== '' || this.dataFinalReferencia !== '') {
      this.consultForm.get('tipoBusca').setValue('dataSaidaConcessionaria');
      this.consultForm.get('busca').setValue(`?=${this.dataInicioReferencia}?=${this.dataFinalReferencia}`);
    }
    let params = '';
    if (this.consultForm.get('tipoBusca').value == 'dataSaidaConcessionaria') {
      params = `?dataInicioReferencia=${this.dataInicioReferencia}?dataFinalReferencia=${this.dataFinalReferencia}`;
    } else params = `?${this.consultForm.get('tipoBusca').value}=${this.consultForm.get('busca').value}`

    if (this.consultForm.get('tipoBusca').invalid) {
      this.tipoBuscaOptions[0].invalid = true
    }
    const controls = this.consultForm.controls;
    if (controls) {
      for (let c in controls) {
        controls[c].markAsTouched()
      }
    }
    if (this.consultForm.invalid) {
      return
    } else {
      try {
        await this.coverageService.consult(params);
        this.showResults = true;
        this.listActive = this.results.filter(r => r.codigoSituacaoValidacao == 'A');
      } catch (error) {

      }
    }
  }

  updateForm(customOption: CustomOption) {
    this.consultForm.reset();
    this.consultForm.get(customOption.formControlName).setValue(customOption.value);
    if (this.consultForm.get('tipoBusca').valid) {
      this.tipoBuscaOptions[0].invalid = false;
    } this.enableField();

    if (this.consultForm.get('tipoBusca').value == 'dataSaidaConcessionaria') {
      this.consultForm.get('busca').setValue('');
      this.consultForm.get('busca').removeValidators(Validators.required);
      this.consultForm.get('busca').updateValueAndValidity();
    }
  }

  navigate(numeroCotacao: string, susep: string, codigoSituacao: string) {
    this.clickLinkTag(numeroCotacao);
    this.router.navigate(['/details'], {
      queryParams: {
        numeroCotacao: numeroCotacao,
        codigoSusep: susep,
        codigoSituacao: codigoSituacao
      }
    })
  }


  enableField() {
    if (this.consultForm.get('tipoBusca').value !== '') {
      this.consultForm.get('busca').enable();
      this.disable = false;
    } else {
      this.consultForm.get('busca').disable();
      this.disable = true;
    }
  }

  clearField(field: string) {
    if (field) {
      this.consultForm.get(field).setValue('');
    } else return;
  }
}
