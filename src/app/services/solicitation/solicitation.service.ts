import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Solicitation } from '../../models/solicitation';


@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  private vehicleData: any = null;
  private personCnpjCpfData: any = [];
  private personCodeData: any = [];
  private solicitationData: Solicitation = new Solicitation();

  get vehicle() {
    return this.vehicleData;
  }

  get personCnpjCpf() {
    return this.personCnpjCpfData;
  }

  get personByCode() {
    return this.personCodeData;
  }

  get solicitation() {
    return this.solicitationData;
  }

  constructor(private http: HttpClient) { }

  async getVehicleData(chassi: string) {
    try {
      const data = await this.http.get(`${environment.url}/coberturas-provisorias/chassi/${chassi}`).toPromise();
      debugger
      this.vehicleData = data;
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'obter_chassi',
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
        ev_label: 'obter_chassi',
        alert_code: error.error.status,
        error_service: 'obter_chassi',
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
      return null
    }
  }

  async getPerson(cnpjCpf: string) {
    try {
      const person = await this.http.post(`${environment.url}/pessoas/busca`, { cnpjCpf: cnpjCpf }).toPromise();
      this.personCnpjCpfData = person;
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'buscar_pessoa',
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
      return person
    } catch (error) {
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'alert',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:alert',
        ev_label: 'buscar_pessoa',
        alert_code: error.error.status,
        error_service: 'buscar_pessoa',
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
      return null
    }
  }

  async getPersonByCode(code: string) {
    try {
      const person = await this.http.get(`${environment.url}/coberturas-provisorias/pessoa/${code}`).toPromise();
      this.personCodeData = person;
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'obter_pessoa',
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
      return person;
    } catch (error) {
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'alert',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:alert',
        ev_label: 'obter_pessoa',
        alert_code: error.error.status,
        error_service: 'obter_pessoa',
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
      return null
    }
  }

  async setSolicitation(body: Solicitation) {
    try {
      const solicitation = await this.http.post<Solicitation>(`${environment.url}/coberturas-provisorias`, body).toPromise();
      this.solicitationData = solicitation;
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'self_service',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:sucesso',
        ev_label: 'solicitar_cobertura',
        service_protocol: '',
        service_detail: '',
        service_type: 'post',
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
      return solicitation;
    } catch (error) {
      const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'alert',
        ev_category: '',
        ev_action: 'avancar:cobertura-provisoria:alert',
        ev_label: 'solicitar_cobertura',
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
      return null
    }
  }

  clearVehicleData() {
    this.vehicleData = [];
  }
}
