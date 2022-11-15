import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ShiftItemModule } from 'src/app/components/shift-item/shift-item.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShiftItemModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }
  ]
})
export class HomeModule { }
