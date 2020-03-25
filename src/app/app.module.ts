import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutes } from './app.routing';
import { OrderComponent } from './services/order/order.component';
import { OrderService } from './services/order.service';
import { ServiceService } from './services/service.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US, providers: [OrderService], providers: [ServiceService], providers: [UserService], providers: [AuthService] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
