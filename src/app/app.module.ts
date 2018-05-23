import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainroutingRoutingModule } from './mainrouting/mainrouting-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ MainroutingModule } from './mainrouting/mainrouting.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MainroutingRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
