import { Component } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  labels1: string[] = ['Ventas descargadas', 'Ventas almacenadas', 'Ventas enviadas'];
  data1: MultiDataSet = [ [50,600,600] ]
  colors1: Color[] = [ {backgroundColor: ['#f62727','#ebc75e','#4af0c1'] }]

}
