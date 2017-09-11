import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular//http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
// import { DashboardModule } from './components/dashboard/dashboard.module';
// import { CountryDetailsModule } from './components/countries/country/country-details/country-details.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
