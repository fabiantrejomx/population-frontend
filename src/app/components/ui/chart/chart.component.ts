import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'bar-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit{

    @ViewChild('chart') private chartContainer: ElementRef;
    // @Input() data: any[];
    // @Input() labels: any[];
    
    data = [80,150,100,200]
    labels = ['2015', '2016', '2017', '2018']

    constructor(){}

    ngOnInit(){
        this.createChart();
        this.getDatasets();
    }
    
    width= 500;
    height= 300;
    
    padding= 20

    private getDatasets(){
        let dat = [
            {data :  [100,90], label: 'Hombre' },
            {data :  [100,200], label: 'Mujer' }
        ]

        let da = dat.map((data: any, index:any) => {
            console.log(Object.assign({}, data))
        })
    }


    private createChart(){

        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth -40;
        this.height = element.offsetHeight -40;
        
        let svg = d3.select(element)
            .append("svg")
            .attr("width", element.offsetWidth)
            .attr("height", element.offsetHeight);      
        
        //GRAFICA

        svg.selectAll("rect")
            .data(this.data)
            .enter()
            .append("rect")
            .text((d) => d )
            .attr("x", (d, i) => { return i * (this.width / this.data.length) + this.padding * 2})
            .attr("y", d =>this.height - (d * 2) + (this.padding * 2))
            .attr("width", this.width /this.data.length - this.padding)
            .attr("height", 0)
            .attr("fill", d => "rgba(255,100,0,0.2")
            .transition()
            .delay((d, i) => i * 300)
            .attr("height", d => (d * 2) - this.padding)


        svg.selectAll("text")
            .data(this.data)
            .enter()
            .append("text")
            .text(d => d)
            .attr("text-ancho", "middle")
            .attr("x", (d, i) => { return i * (this.width / this.data.length) })
            .attr("y", d => this.height - d)
            .attr("transform", `translate(${this.padding * 2}, ${this.padding})`)

        //Coordenadas    
        let xDomain = this.labels.map(l => l);
        let yDomain = [0, d3.max(this.data, d => d)]
        console.log(yDomain)

        let xScale = d3
        .scaleBand()
        .domain(xDomain)
        .rangeRound([this.padding * 2, this.width])

        let xAxis = d3.axisBottom(xScale);
        
        svg.append('g')
        .attr("transform", `translate(0, ${this.padding + this.height})`)
        .call(xAxis);


        let yScale = d3.scaleLinear().domain(yDomain).rangeRound([this.height, 0])
        let yAxis = d3.axisLeft(yScale);
        svg.append('g')
        .attr("transform", `translate(${this.padding + 10}, ${this.padding})`)
        .call(yAxis);

    }
}