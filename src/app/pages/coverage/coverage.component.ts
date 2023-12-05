import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoModalComponent } from '../../components/info-modal/info-modal.component';
import { ModalService } from '../../services/modal.service';
import { ValidatorService } from '../../services/validator/validator.service';


interface Tab {
  id: number,
  description: string,
  selected: boolean
}

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})

export class CoverageComponent extends ValidatorService {

  incident: string = '1017102999230';

  tabSelected = 0;

  tabs: Array<Tab> = [
    {
      id: 0,
      description: 'Solicitar',
      selected: true
    },
    {
      id: 1,
      description: 'Consultar',
      selected: false
    }
  ]

  constructor(private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private router: Router) {
    super();
    const params = this.activatedRouter.snapshot.queryParams;
    let paramObj = {};

    if (localStorage.getItem('promoParams') && Object.keys(JSON.parse(localStorage.getItem('promoParams'))).length > 0 && !params['corsus']) {
      const existinPromoParams = JSON.parse(localStorage.getItem('promoParams'));
      Object.keys(existinPromoParams).forEach(key => {
        paramObj[key] = params[key];
      });
    } else {
      Object.keys(params).forEach(key => {
        paramObj[key] = params[key];
      });

      localStorage.setItem('promoParams', JSON.stringify(paramObj));

    }

    const { incident } = this.activatedRouter.snapshot.queryParams;
    if (!incident) return;
    this.incident = incident;
  }

  ngOnInit(): void {
    this.tabs.forEach(t => {
      if (t.id === this.tabSelected) {
        t.selected = true;
      } else t.selected = false;
    });
  }


  changeTab(tab: Tab) {
    this.clickBtnTag(tab.description);
    this.tabs.find((tb: Tab) => {
      if (tb.selected) tb.selected = false;
    })
    tab.selected = true;
    this.tabSelected = tab.id;
    this.router.navigate([], {
      queryParams: {
        tab: tab.id
      }
    })
  }


  openModalInfo() {
    this.clickLinkTag('saiba-mais');
    this.modalService.open(InfoModalComponent, {
      content: {
        sideSlide: true
      }
    })
  }

}
