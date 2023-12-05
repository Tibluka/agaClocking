import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValidatorService } from './validator/validator.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends ValidatorService {

  private transitionData: boolean = false;
  private stateData = new BehaviorSubject({ modalState: false, action: false });
  private modalContentData: any;
  private componentData: any = null;

  get transition() {
    return this.transitionData;
  }

  get state() {
    return this.stateData;
  }

  get component() {
    return this.componentData;
  }

  get modalContent() {
    return this.modalContentData;
  }

  constructor() {
    super();
    const that = this;
    document.onkeyup = function (evt: any) {
      evt = evt || window.event;
      if (evt.keyCode == 27 && that.state.value.modalState === true && !that.modalContent?.blockEscKeyToClose) {
        that.close(false);
      }
    };
  }

  open(component: any, options?: { content: any }) {
    this.modalContentData = options?.content;
    this.stateData.next({ modalState: true, action: null });
    this.componentData = component;
    var postMsg = {};
    postMsg['message'] = "scrollTop";
    window.parent.postMessage(JSON.stringify(postMsg), "*");
    this.openModalTag(component.name);
  }

  close(action: any) {
    this.setTransition(false);
    // parâmetro action define se o usuário cancelou ou afirmou ao fechar o modal. false === cancelou, true === afirmou
    setTimeout(() => {
      this.stateData.next({ modalState: false, action });
      this.componentData = null;
      this.stateData = new BehaviorSubject({ modalState: false, action: false });
    }, 100);
  }

  setModalContent(content: any) {
    this.modalContentData = content;
  }

  setTransition(state: boolean) {
    this.transitionData = state;
  }


}
