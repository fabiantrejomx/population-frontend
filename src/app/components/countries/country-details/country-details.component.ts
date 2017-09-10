import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogsService } from '../../../services/catalogs.service';

@Component({
    selector: 'country-details',
    templateUrl: './country-details.component.html',
    providers: [CatalogsService]
})
export class CountryDetailsComponent implements OnInit{

    details: any;
    natality: any[];
    barChartOptions: any;
    barChartLabels: string[];
    barChartData: any[];
    data: any[];
    lineChartData: any[];
    lineChartLabels: any[];
    male: any[];
    female: any[];
    isShowFilters: boolean;

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
        this.data = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.male = [];
        this.female = [];
    }

    ngOnInit(){
        this.catalogsService.getCountryDetails(this.activatedRoute.snapshot.params.id)
            .subscribe(details => this.details = details);

        this.catalogsService.getNatality(this.activatedRoute.snapshot.params.id)
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
        this.filterDataByGender('male');
    }

    showChartFemale(){
        this.resetCharts();
        this.isShowFilters = false;
        this.filterDataByGender('female');
    }

    showChartsOfBoth(){
        this.resetCharts();
        this.isShowFilters = false;
 
        this.lineChartData.push(this.natality.filter(element => element.gender === 'female').map(element => {
            this.lineChartLabels.push(element.year.toString())
            this.female.push(element.value)
        }));
 
        this.lineChartData.push(this.natality.filter(element => element.gender === 'male').map(element => {
            this.male.push(element.value)
        }));

        this.lineChartData = [ this.female , this.male];
     }

    goToAllCountries(){
        this.router.navigate(['../'], { relativeTo: this.activatedRoute})
    }

    private filterDataByGender(gender: string){
        this.natality.filter(element => element.gender ===  gender).map(element => {
            this.barChartLabels.push(element.year.toString());
            this.data.push(element.value);                 
        });
        this.barChartData.push({ data: this.data, label: gender });
        console.log(this.barChartData)
    }

    private resetCharts(){
        this.isShowFilters = true;        
        this.barChartLabels = [];
        this.data = [];
        this.barChartData = [];
        this.lineChartData = [];
        this.male = [];
        this.female = [];
        this.lineChartLabels = [];        
    }

    // events
    public chartClicked(e:any):void {
        console.log(e.active[0]._model);
    }
    
    public chartHovered(e:any):void {
        console.log(e);
    }

}