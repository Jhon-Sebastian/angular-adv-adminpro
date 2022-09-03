import { Component, Input, OnInit } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{


  @Input() leyenda: string = 'No hay titulo';
  @Input('labels') doughnutChartLabels: string[] = [ 'Default sales', 'Default sales', 'Default sales' ];
  @Input('data') doughnutChartData: MultiDataSet = [ [200, 200, 200] ]
  @Input('colors') colors: Color[] = [ {backgroundColor: ['#6857E6', '#009FEE','#F02059']} ]

  colorTitulo: string = 'red';


  ngOnInit(): void {
    this.cambiarColorTitulo()
  }

  cambiarColorTitulo(){
    if(this.leyenda !== 'No hay titulo'){
      this.colorTitulo = ''
    }
  }

}
