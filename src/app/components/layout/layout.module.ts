import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { CountriesModule } from '../countries/countries.module';
import { SharedModule } from './../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    FormsModule,
    SharedModule,
    CountriesModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent
  ]
})
export class LayoutModule {
}
