import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html',
    providers: [CatalogsService]
})
export class CountriesComponent implements OnInit{

    countries: any[];

    constructor(private catalogsService: CatalogsService){}

    ngOnInit(){
        this.catalogsService.getCountries().subscribe(countries => this.countries = countries);
    }

}