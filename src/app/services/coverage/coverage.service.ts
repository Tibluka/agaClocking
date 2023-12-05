import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  private coverageData: any = null;
  private resultData: any = [];

  get coverage() {
    return this.coverageData;
  }

  get result() {
    return this.resultData;
  }

  constructor(private http: HttpClient) { }

  async setCoverage(cotacao: string, alteracao: string, oferta: string) {
    try {
      debugger
      const data = await this.http.get(`${environment.url}/coberturas-provisorias/cotacoes/${cotacao}-${alteracao}-${oferta}`).toPromise();
      
      this.coverageData = data; 
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'obter_cotacoes',
        service_protocol: '',
        service_detail: '',
        service_type: 'get',
        dt_solicitacao: new Date(),
        hr_solicitacao: new Date(),
        status: '',
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
      return data;
    } catch (error) {
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'alert',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:alert',
        ev_label: 'obter_cotacoes',
        alert_code: error.error.status,
        error_service: 'obter_cotacoes',
        alert_service_message: error.error.message,
        alert_event: '',
        aler_type: '',
        status: '',
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
      return null;
    }
  }

  async consult(params) {
    try {
      const result = await this.http.get(`${environment.url}/coberturas-provisorias/${params}`).toPromise();
      this.resultData = result;
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'obter_cotacoes',
        service_protocol: '',
        service_detail: '',
        service_type: 'get',
        dt_solicitacao: new Date(),
        hr_solicitacao: new Date(),
        status: '',
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
      return result;
    } catch (error) {
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'alert',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:alert',
        ev_label: 'consultar_coberturas',
        alert_code: error.error.status,
        error_service: 'consultar_coberturas',
        alert_service_message: error.error.message,
        alert_event: '',
        aler_type: '',
        status: '',
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
      return null;

    }

  }

}
