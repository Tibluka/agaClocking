import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoverageService } from '../../services/coverage/coverage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {

  numeroCotacao: string = '';
  codigoSusep: string = '';
  codigoSituacao: string = '';
  details: any = null;
  cpfCnpj: string = '';

  constructor(private activatedRouter: ActivatedRoute,
    private coverageService: CoverageService) {
    const { numeroCotacao } = this.activatedRouter.snapshot.queryParams;
    const { codigoSusep } = this.activatedRouter.snapshot.queryParams;
    const { codigoSituacao } = this.activatedRouter.snapshot.queryParams;

    if (numeroCotacao) {
      this.numeroCotacao = numeroCotacao;
    }

    if (codigoSusep) {
      this.codigoSusep = codigoSusep;
    }

    if (codigoSituacao) {
      this.codigoSituacao = codigoSituacao;
    }
  }

  async ngOnInit() {
    if (this.numeroCotacao) {
      let details: any = await this.coverageService.consult(`?numeroCoberturaProvisoria=${this.numeroCotacao}`);
      this.details = details.filter(item => item.codigoSituacaoCoberturaProvisoria == this.codigoSituacao);
      this.cpfCnpj = `${this.details[0].segurado.numeroCpfouCnpj}${this.details[0].segurado.digitoCpfouCnpj}`
    }
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

}
