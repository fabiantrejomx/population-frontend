import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FiltersComponent } from './filters.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [FiltersComponent],
    exports: [FiltersComponent]
})
export class FiltersModule{
}