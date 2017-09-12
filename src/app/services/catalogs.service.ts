import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatalogsService{

    url: String;
	
	constructor(private http: HttpClient){
        this.url = '/population_admin'
    }


	getCountries(){
        return this.http.get(this.url + '/countries');
    }

    getCountry(id: number){
        return this.http.get(this.url + '/countries/' + id);
    }

    getCountryDetails(id: number){
        return this.http.get(this.url + '/countries/' + id + '/details');
    }

    // getGender(id: number){
        
    //     return Observable.of([
    //         {
    //             'id': '1',
    //             'gender': 'female'
    //         },
    //         {
    //             'id': '2',
    //             'gender': 'male'
    //         } 
    //     ])
    // }

    getNatality(countryId: number){
        return this.http.get(this.url + '/countries/' + countryId + '/natality');
    }

    updateNatalityDescription(description: any, countryId: any){
        return this.http.put(this.url + '/countries/' + countryId + '/details', description);
    }
}