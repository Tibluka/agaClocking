import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Hammer from 'hammerjs';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteShiftComponent } from './components/delete-shift/delete-shift.component';
import { LoadingModule } from './components/loading/loading.module';
import { NewShiftComponent } from './components/new-shift/new-shift.component';
import { UpdateShiftComponent } from './components/update-shift/update-shift.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';

registerLocaleData(localePt);

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NewShiftComponent,
    UpdateShiftComponent,
    DeleteShiftComponent,
    CreateUserComponent,
    CreateProjectComponent,
    ChooseUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HammerModule,
    FormsModule,
    LoadingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          {
            path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
          },
          {
            path: '', canActivate: [AuthGuardService], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
          },
          {
            path: 'thanks', loadChildren: () => import('./pages/thanks/thanks.module').then(m => m.ThanksModule)
          }

        ]
      }
    ]),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
