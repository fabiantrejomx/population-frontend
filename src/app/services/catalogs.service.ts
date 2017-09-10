import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogsService{

	
	constructor(){}


	getCountries(){
        return Observable.of([
            {
                'id': 1,
                'name': "Estados unidos mexicanos",
                'capital': 'Mexico City',
                'alias': 'MX'
            },
            {
                'id': 2,
                'name': "Estados unidos de america",
                'capital': 'Whashington',
                'alias': 'US'
            },
            {
                'id': 3,
                'name': "Estados unidos",
                'capital': 'Whash',
                'alias': 'USMX'
            },
            {
                'id': 4,
                'name': "Estados de america",
                'capital': 'Whashington',
                'alias': 'MS'
            }
        ]);
    }

    getCountryDetails(id: number){
        return Observable.of({            
            'id': 1,
            'population': "32154844",
            'currency': 'Mexico City',
            'description': 'blablalblablakaklshkldahsda'
            
        });
    }

    getGender(){
        return Observable.of([
            {
                'id': '1',
                'gender': 'female'
            },
            {
                'id': '2',
                'gender': 'male'
            } 
        ])
    }

    getNatality(countryId: number){
        return Observable.of([
            {
                'gender': 'female',
                'year': 2007,
                'value': 310
            },
            {
                'gender': 'female',
                'year': 2008,
                'value': 350
            },
            {
                'gender': 'female',
                'year': 2009,
                'value': 330
            },
            {
                'gender': 'male',
                'year': 2007,
                'value': 350
            },
            {
                'gender': 'male',
                'year': 2008,
                'value': 350
            }
        ])
    }
}