import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      HttpModule,
      CommonModule
    ],
    exports: [
      CommonModule
    ],
    providers: []
})
export class SharedModule {
    
}