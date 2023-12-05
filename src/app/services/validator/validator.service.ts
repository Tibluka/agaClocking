import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  inputFocus: { [key: string]: boolean } = {};

  constructor() { }

  onInputBlur(controlName: string) {
    this.inputFocus[controlName] = false;
  }

  onInputFocus(controlName: string) {
    this.inputFocus[controlName] = true;
  }

  validateField(formControl: any) {
    if (formControl && formControl.invalid && formControl.touched) { return true }
    else return false;
  }

  /* tagging */

  clickLinkTag(title: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'select_content',
        ev_category: '',
        ev_action: `click:link:${title}`,
        ev_label: 'solicitar_cobertura',
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


  clickCheckboxTag(value: string, title: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
    window['dataLayer'].push({
      event: 'select_content',
      ev_category: '',
      ev_action: `check:${title}`,
      ev_label: value,
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

  clickBtnTag(title: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'select_content',
        ev_category: '',
        ev_action: `click:button:${title}`,
        ev_label: '',
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

  openModalTag(component: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
    window['dataLayer'].push({
      event: 'dialog',
      ev_category: '',
      ev_action: 'dialog:visualizar',
      ev_label: component,
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

  selectTag(field: string, value: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
      window['dataLayer'].push({
        event: 'select_content',
        ev_category: '',
        ev_action: `selecionou:${field}`,
        ev_label: value,
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

  formInputTag(field: string) {
    const user = JSON.parse(localStorage.getItem('promoParams'));
     window['dataLayer'].push({
       event: 'select_content',
       ev_category: '',
       ev_action: `preencheu:${field}`,
       ev_label: '',
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

  copyToClipboard(text: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);  }

}
