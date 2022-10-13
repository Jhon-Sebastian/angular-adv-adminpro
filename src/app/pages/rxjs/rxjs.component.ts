import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy{


  internalSubs : Subscription;


  constructor(private rxjsService: RxjsService) {
    this.internalSubs = rxjsService.returnInterval().subscribe(val => console.log(val))
  }

  ngOnDestroy(): void {
    this.internalSubs.unsubscribe();
  }





}
