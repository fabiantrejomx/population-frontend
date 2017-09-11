import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html',
    providers: [CatalogsService]
})
export class CountriesComponent implements OnInit{

    countries: any;
    isLoading: boolean;

    constructor(private catalogsService: CatalogsService){}

    ngOnInit(){
        this.isLoading = true;
        this.catalogsService.getCountries()
        .finally(() => this.isLoading = false)
        .subscribe(countries => this.countries = countries);
    }

}