import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmCancelComponent } from '../../components/confirm-cancel/confirm-cancel.component';
import { ModalWhereIsComponent } from '../../components/modal-where-is/modal-where-is.component';
import { SuccessComponent } from '../../components/success/success.component';
import { CustomOption } from '../../models/customOption';
import { CoverageService } from '../../services/coverage/coverage.service';
import { ModalService } from '../../services/modal.service';
import { SolicitationService } from '../../services/solicitation/solicitation.service';
import { ValidatorService } from '../../services/validator/validator.service';


@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.scss']
})

export class SolicitationComponent extends ValidatorService {

  personNotFound = false;

  get vehicleData() {
    return this.solicitationService.vehicle;
  }

  get coverage() {
    return this.coverageService.coverage;
  }

  get personCode() {
    return this.solicitationService.personByCode;
  }

  get personCpf() {
    return this.solicitationService.personCnpjCpf;
  }

  @Output() nextEmitter = new EventEmitter();

  isInputTouched: boolean = false;

  numeroCotacao: string = '';
  alteracao: string = '';
  oferta: string = '';

  solicitationForm: FormGroup = new FormGroup({
    numeroNotaFiscal: new FormControl('', Validators.required),
    serieNotaFiscal: new FormControl('', Validators.required),
    dataSaidaConcessionaria: new FormControl('', Validators.required),
    corsus: new FormControl('', Validators.required),
    atributoControle: new FormControl('S', Validators.required),
    codigoEmpresa: new FormControl('', Validators.required),
    segurado: new FormGroup({
      nome: new FormControl('', Validators.required),
      tipoPessoa: new FormControl('', Validators.required),
      cgcOuCpf: new FormControl('', Validators.required),
      numeroCgcOuCpf: new FormControl('', Validators.required),
      ordemCgc: new FormControl('', Validators.required),
      digitoCgcOuCpf: new FormControl('', Validators.required),
    }),
    veiculo: new FormGroup({
      codigoDigitoModelo: new FormControl('', Validators.required),
      marcaModelo: new FormControl('', Validators.required),
      anoModelo: new FormControl('', Validators.required),
      quantidadePortas: new FormControl('', Validators.required),
      chassi: new FormControl('', Validators.required),
      combustivel: new FormControl('', Validators.required),
      codigoCombustivel: new FormControl('', Validators.required)
    })
  })

  empresaOptions: Array<CustomOption> = [
    new CustomOption(false, 'PORTO SEGURO CIA DE SEGUROS GERAIS', '1', 'codigoEmpresa'),
    new CustomOption(false, 'AZUL COMPANHIA DE SEGUROS GERAIS', '35', 'codigoEmpresa'),
    new CustomOption(false, 'ITAU SEGUROS DE AUTO E RESIDENCIA', '84', 'codigoEmpresa'),

  ];

  susepOptions: Array<CustomOption> = [];

  today: string = new Date().toISOString().split('T')[0];

  /* marcaOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'marca'),
  ];
  modeloOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'modelo'),
  ];
  anoModeloOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'anoModelo'),
  ];
  anoFabricacaoOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'anoFabricacaoVeiculo'),
  ];
  qtdPortasOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'quantidadePortas'),
  ];
  combustivelOptions: Array<CustomOption> = [
    new CustomOption(false, '', '', 'combustivel'),
  ]; */

  constructor(private modalService: ModalService,
    private router: Router,
    private solicitationService: SolicitationService,
    private coverageService: CoverageService,
    private http: HttpClient,
    private activatedRouter: ActivatedRoute) {
    super();
    const { numeroCotacao } = this.activatedRouter.snapshot.queryParams;
    const { alteracao } = this.activatedRouter.snapshot.queryParams;
    const { oferta } = this.activatedRouter.snapshot.queryParams;
    if (numeroCotacao) {
      this.numeroCotacao = numeroCotacao;
    }
    if (alteracao) {
      this.alteracao = alteracao;
    }
    if (oferta) {
      this.oferta = oferta;
    }
  }

  async ngOnInit() {
    this.solicitationForm.get('segurado.nome').disable();
    this.solicitationForm.get('veiculo.marcaModelo').disable();
    this.solicitationForm.get('veiculo.codigoDigitoModelo').disable();
    this.solicitationForm.get('veiculo.anoModelo').disable();
    this.solicitationForm.get('veiculo.quantidadePortas').disable();
    this.solicitationForm.get('veiculo.combustivel').disable();

    if (this.numeroCotacao) {
      const cobertura: any = await this.coverageService.setCoverage(this.numeroCotacao, this.alteracao, this.oferta);
      if (cobertura) {
        /*         this.solicitationForm.get('codigoEmpresa').setValue(cobertura.orcamentos[0].empresa.codigo);
                this.solicitationForm.get('codigoEmpresa').disable();
         */
        /* Dados segurado */
        debugger
        this.solicitationForm.get('segurado.cgcOuCpf').setValue(cobertura.segurado.cpfCnpjSegurado);
        this.solicitationForm.get('segurado.cgcOuCpf').disable();
        this.solicitationForm.get('segurado.nome').setValue(cobertura.segurado.nomeSegurado);
        this.solicitationForm.get('segurado.nome').disable();
        this.solicitationForm.get('segurado.tipoPessoa').setValue(cobertura.segurado.tipoPessoaSegurado);

        /* Dados veículo */

        if (cobertura.codigoEmpresa) {
          this.solicitationForm.get('codigoEmpresa').setValue(cobertura.codigoEmpresa);
        }

        this.solicitationForm.get('veiculo.chassi').setValue(cobertura.veiculo.chassi);
        if (cobertura.veiculo.chassi) {
          this.solicitationForm.get('veiculo.chassi').disable();
        }
        this.solicitationForm.get('veiculo.marcaModelo').setValue(cobertura.veiculo.nomeModelo);
        this.solicitationForm.get('veiculo.marcaModelo').disable();
        this.solicitationForm.get('veiculo.anoModelo').setValue(cobertura.veiculo.anoModelo);
        this.solicitationForm.get('veiculo.anoModelo').disable();

        if (cobertura.veiculo.qtdePortas == 0) {
          this.solicitationForm.get('veiculo.quantidadePortas').setValue('0')
        } else {
          this.solicitationForm.get('veiculo.quantidadePortas').setValue(cobertura.veiculo.qtdePortas)
        }
        this.solicitationForm.get('veiculo.quantidadePortas').disable();
        this.solicitationForm.get('veiculo.combustivel').setValue(cobertura.veiculo.combustivel);
        this.solicitationForm.get('veiculo.combustivel').disable();
        this.solicitationForm.get('veiculo.codigoCombustivel').setValue(cobertura.veiculo.codigoCombustivel);
        this.solicitationForm.get('veiculo.codigoDigitoModelo').setValue(cobertura.veiculo.codigoDigitoModelo);
        this.solicitationForm.get('veiculo.codigoDigitoModelo').disable();

      }
    }
    let promoParams = JSON.parse(localStorage.getItem('promoParams'));
    this.solicitationForm.get('corsus').setValue(promoParams.corsus);

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

  updateForm(customOption: CustomOption) {
    this.selectTag(customOption.formControlName, customOption.value);
    this.solicitationForm.get(customOption.formControlName).setValue(customOption.value);
    if (this.solicitationForm.get('codigoEmpresa').valid) {
      this.empresaOptions[0].invalid = false;
    }
  }

  populateCustomInput(field: string) {
    const value = this.solicitationForm.controls[field].value;
    return this.empresaOptions.find(c => c.value == value)?.description;
  }

  openModal() {
    this.modalService.open(ModalWhereIsComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  cancel() {
    this.modalService.open(ConfirmCancelComponent);
    this.modalService.state.subscribe(onClose => {
      if (onClose.action && this.modalService.state.value.modalState == false) {
        this.router.navigate(['']);
      }
    })
  }

  preencherCgcOuCpf() {
    const cgcOuCpf = this.solicitationForm.get('segurado.cgcOuCpf').value;

    if (cgcOuCpf.length == 11) {
      const numeroCgcOuCpf = cgcOuCpf.slice(0, -2);
      const digito = cgcOuCpf.slice(-2);
      this.solicitationForm.get('segurado.numeroCgcOuCpf').setValue(numeroCgcOuCpf);
      this.solicitationForm.get('segurado.ordemCgc').setValue(null);
      this.solicitationForm.get('segurado.digitoCgcOuCpf').setValue(digito);

    } else if (cgcOuCpf.length > 11) {
      const numeroCgcOuCpf = cgcOuCpf.slice(0, -6);
      const ordem = cgcOuCpf.charAt(11);
      const digito = cgcOuCpf.slice(-2);
      this.solicitationForm.get('segurado.numeroCgcOuCpf').setValue(numeroCgcOuCpf);
      this.solicitationForm.get('segurado.ordemCgc').setValue(ordem);
      this.solicitationForm.get('segurado.digitoCgcOuCpf').setValue(digito);
    }
  }

  getFormControls() {

    if (this.solicitationForm.get('codigoEmpresa').invalid) {
      this.empresaOptions[0].invalid = true
    }

    this.preencherCgcOuCpf();

    const formControls = new FormGroup({});
    Object.keys(this.solicitationForm.controls).forEach((controlName: any) => {
      if (this.solicitationForm.controls[controlName]['controls']) {
        let childControls = this.solicitationForm.controls[controlName]['controls'];
        formControls.addControl(controlName, new FormGroup({}));
        for (let control in childControls) {
          if (control !== 'cgcOuCpf' && control !== 'combustivel') {
            if (control == 'marcaModelo') {
              formControls['controls'][controlName].addControl('nome', new FormControl(childControls[control].value, Validators.required))
            } else {
              formControls['controls'][controlName].addControl(control, new FormControl(childControls[control].value, Validators.required))
            }
          }
        }
      } else {
        formControls.addControl(controlName, new FormControl(this.solicitationForm.get(controlName).value, Validators.required));
      }
    });

    if (this.solicitationForm.get('segurado.tipoPessoa').value == 'F') {
      formControls['controls']['segurado'].removeControl('ordemCgc');
    }
    return formControls;
  }

  changeToNumber(formValues) {
    formValues.get('numeroNotaFiscal').setValue(Number(formValues.get('numeroNotaFiscal').value));
    formValues.get('serieNotaFiscal').setValue(Number(formValues.get('serieNotaFiscal').value));
    formValues.get('codigoEmpresa').setValue(Number(formValues.get('codigoEmpresa').value));
    formValues.get('segurado.numeroCgcOuCpf').setValue(Number(formValues.get('segurado.numeroCgcOuCpf').value));
    if (formValues.get('segurado.ordemCgc')) {
      formValues.get('segurado.ordemCgc').setValue(Number(formValues.get('segurado.ordemCgc').value));
    }
    formValues.get('segurado.digitoCgcOuCpf').setValue(Number(formValues.get('segurado.digitoCgcOuCpf').value));
    formValues.get('veiculo.anoModelo').setValue(Number(formValues.get('veiculo.anoModelo').value));
    formValues.get('veiculo.quantidadePortas').setValue(Number(formValues.get('veiculo.quantidadePortas').value));
    formValues.get('veiculo.codigoCombustivel').setValue(Number(formValues.get('veiculo.codigoCombustivel').value));
    formValues.get('veiculo.codigoDigitoModelo').setValue(Number(formValues.get('veiculo.codigoDigitoModelo').value));
    return formValues;
  }

  async confirm() {
    this.clickBtnTag('concluir-solicitacao');
    let formValues: any = this.getFormControls();
    if (formValues.invalid) {
      const controls = this.solicitationForm.controls;
      for (let c in controls) {
        if (controls[c]['controls']) {
          const newC = controls[c]['controls'];
          for (let nc in newC) {
            newC[nc].markAsTouched()
          }
        } else controls[c].markAsTouched()
      };

      return
    } else {
      const formatedFormValue = this.changeToNumber(formValues);
      const success: any = await this.solicitationService.setSolicitation(formatedFormValue.value);
      if (success) {
        this.modalService.open(SuccessComponent, {
          content: {
            numeroCobertura: success.numeroCoberturaProvisoriaDigito
          }
        });
      } else {
        alert('Ocorreu um erro')
      }
    }

  }

  async getVehicleDataByChassiNumber() {
    let chassi = this.solicitationForm.get('veiculo.chassi').value;
    if (!chassi) {
      return
    } else {
      this.solicitationForm.get('veiculo.marcaModelo').enable();
      this.solicitationForm.get('veiculo.codigoDigitoModelo').enable();
      this.solicitationForm.get('veiculo.anoModelo').enable();
      this.solicitationForm.get('veiculo.quantidadePortas').enable();
      this.solicitationForm.get('veiculo.combustivel').enable();
      const vehicleData: any = await this.solicitationService.getVehicleData(chassi);
      if (vehicleData) {
        this.solicitationForm.get('veiculo.marcaModelo').setValue(vehicleData.nomeModelo);
        this.solicitationForm.get('veiculo.marcaModelo').disable();
        this.solicitationForm.get('veiculo.anoModelo').setValue(vehicleData.anoModelo)
        this.solicitationForm.get('veiculo.anoModelo').disable();
        if (vehicleData.qtdePortas == 0) {
          this.solicitationForm.get('veiculo.quantidadePortas').setValue('0')
        } else {
          this.solicitationForm.get('veiculo.quantidadePortas').setValue(vehicleData.qtdePortas)
        }
        this.solicitationForm.get('veiculo.quantidadePortas').disable();
        this.solicitationForm.get('veiculo.combustivel').setValue(vehicleData.combustivel);
        this.solicitationForm.get('veiculo.combustivel').disable();
        this.solicitationForm.get('veiculo.codigoCombustivel').setValue(vehicleData.codigoCombustivel);
        this.solicitationForm.get('veiculo.codigoDigitoModelo').setValue(vehicleData.codigoDigitoModelo);
      } else {
        this.solicitationForm.get('veiculo.codigoCombustivel').setValue("1");
        this.solicitationForm.get('veiculo.codigoDigitoModelo').setValue("1");
      }

    }
  }

  async getPersonByCpfCnpj() {
    this.personNotFound = false;

    let numeroCgcOuCpf = this.solicitationForm.get('segurado.cgcOuCpf').value;
    if (!numeroCgcOuCpf) {
      return
    } else {
      if (numeroCgcOuCpf.length < 14) {
        this.solicitationForm.get('segurado.tipoPessoa').setValue('F')
      } else {
        this.solicitationForm.get('segurado.tipoPessoa').setValue('J')
      }
      this.solicitationForm.get('segurado.nome').enable();

      const personCpf: any = await this.solicitationService.getPerson(numeroCgcOuCpf);

      if (personCpf) {
        const person = personCpf.pessoas.find(p => p.documentos.find(d => d.numeroDocumento == numeroCgcOuCpf));
        this.solicitationForm.get('segurado.nome').setValue(person.nomeLegalPessoa);
        this.solicitationForm.get('segurado.nome').disable();
        this.preencherCgcOuCpf();
        this.personNotFound = false;
      } else {
        this.personNotFound = true;
      }

    }
  }

  clearField(field: string) {
    this.personNotFound = false;
    if (field) {
      if (field == 'veiculo.chassi') {
        this.solicitationForm.get('veiculo.chassi').setValue('');
        this.solicitationForm.get('veiculo.chassi').enable();
        this.solicitationForm.get('veiculo.marcaModelo').setValue('');
        this.solicitationForm.get('veiculo.anoModelo').setValue('');
        this.solicitationForm.get('veiculo.quantidadePortas').setValue('');
        this.solicitationForm.get('veiculo.combustivel').setValue('');
        this.solicitationService.clearVehicleData();
      } else if (field == 'segurado.cgcOuCpf') {
        this.solicitationForm.get('segurado.nome').setValue('');
        this.solicitationForm.get('segurado.cgcOuCpf').setValue('');
        this.solicitationForm.get('segurado.numeroCgcOuCpf').setValue('')
        this.solicitationForm.get('segurado.numeroCgcOuCpf').enable();
        this.solicitationForm.get('segurado.ordemCgc').setValue('');
        this.solicitationForm.get('segurado.digitoCgcOuCpf').setValue('');
        this.solicitationForm.get('segurado.tipoPessoa').setValue('');
      }
      else this.solicitationForm.get(field).setValue('');
    } else return;

  }
}
