import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogsService } from '../../../services/catalogs.service';

@Component({
    selector: 'country-details',
    templateUrl: './country-details.component.html',
    providers: [CatalogsService]
})
export class CountryDetailsComponent implements OnInit{

    countryId: number;
    details: any;
    natality: any;
    barChartOptions: any;
    barChartLabels: any;
    barChartData: any[];
    isShowFilters: boolean;
    country: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private catalogsService: CatalogsService
    ){
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };

        this.isShowFilters = true;
        this.barChartLabels = [];
        this.barChartData = [];
    }

    ngOnInit(){

        this.countryId = this.activatedRoute.snapshot.params.id;

        this.catalogsService.getCountry(this.countryId)
            .subscribe(country => this.country = country)

        this.catalogsService.getCountryDetails(this.countryId)
            .subscribe(details => this.details = details);

        this.catalogsService.getNatality(this.countryId)
            .subscribe(natality => this.natality = natality);
    }

    onShowChart(gender: any){
        if(gender === 'male')
            this.showChartMale();

        if(gender === 'female')
            this.showChartFemale();

        if(gender === 'both')
            this.showChartsOfBoth();
    }

    showChartMale(){
        this.resetCharts();
        this.isShowFilters = false;
        this.filterDataByGender(1);
    }

    showChartFemale(){
        this.resetCharts();
        this.isShowFilters = false;
        this.filterDataByGender(2);
    }

    showChartsOfBoth(){
        this.resetCharts();
        this.isShowFilters = false;

        this.filterDataByGender(1);
        this.filterDataByGender(2);
     }

    
    goToAllCountries(){
        this.router.navigate(['../'], { relativeTo: this.activatedRoute})
    }

    private filterDataByGender(gender: number){
        let data = [];
        this.natality.sort((a, b) => a.year - b.year).filter(element => element.gender ===  gender).map(element => {
            if(!this.barChartLabels.find(e => e == element.year.toString()))
                this.barChartLabels.push(element.year.toString());

            data.push(element.value);                 
        });
        this.barChartData.push({ data, label: gender });
        this.barChartLabels.sort();
    }

    private resetCharts(){
        this.isShowFilters = true;        
        this.barChartLabels = [];
        this.barChartData = [];      
    }

    // events
    public chartClicked(e:any):void {
        console.log(e.active[0]._model);
    }
    
    public chartHovered(e:any):void {
        console.log(e);
    }

}