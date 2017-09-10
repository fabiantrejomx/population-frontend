import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'country',
    templateUrl: './country.component.html'
})
export class CountryComponent{

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){}

    @Input() country: any;

    goToDetails(country: any){
        this.router.navigate([country.id], { relativeTo: this.activatedRoute})
    }

}