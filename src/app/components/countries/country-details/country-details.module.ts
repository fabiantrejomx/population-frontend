import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CountryDetailsComponent } from './country-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts-x';

import { ChartModule } from '../../ui/chart/chart.module';

@NgModule({
    imports: [
        SharedModule, 
        ReactiveFormsModule, 
        ChartsModule,
        ChartModule
    ],
    declarations: [CountryDetailsComponent],
    exports: [CountryDetailsComponent]
})
export class CountryDetailsModule{

}