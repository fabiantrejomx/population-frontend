import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CountriesComponent } from './countries.component';
import { RouterModule } from '@angular/router';
import { CountryModule } from './country/country.module';
import { CommonModule } from '@angular/common';
import { CountryDetailsModule } from './country-details/country-details.module';
import { CountryDetailsComponent } from './country-details/country-details.component'

export const routes = [
    { path: '', component: CountriesComponent},
    { path: ':id', component: CountryDetailsComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CountryModule,
        SharedModule,
        CommonModule,
        CountryDetailsModule
    ],
    declarations: [CountriesComponent]
})
export class CountriesModule{
    static routes = routes;
}