import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

    @Input() isShowFilters: boolean;
    @Output() showChart = new EventEmitter();

    onShowChart(gender: String){
        this.showChart.emit(gender);
    }

}