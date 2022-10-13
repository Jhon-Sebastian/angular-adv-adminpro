import { Component, OnInit } from '@angular/core';
import { PromisesService } from 'src/app/services/promises.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  listData: any;

  constructor(private promiseService: PromisesService) { }

  ngOnInit(): void {
    this.getUsuarios().then( data => {
      console.log(data)
      this.listData = data
    })
  }


  getUsuarios(){
    return this.promiseService.requestHttpToAPIUsers();
  }


}
