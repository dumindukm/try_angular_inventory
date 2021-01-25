import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './custom_components/login/login.component';
import { DashboardComponent } from './custom_components/dashboard/dashboard.component';
import { SecureLayoutComponent } from './layouts/secure-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LoginLayoutComponent,
    SecureLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
