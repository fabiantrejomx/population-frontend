import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CountryComponent } from './country.component';
import { RouterModule  } from '@angular/router';


@NgModule({
    imports: [ 
        SharedModule],
    declarations: [CountryComponent],
    exports: [CountryComponent]
})
export class CountryModule{
}