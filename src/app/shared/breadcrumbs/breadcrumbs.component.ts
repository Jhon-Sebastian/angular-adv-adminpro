import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  title: string = 'Title';
  titleSubs$: Subscription;

  //Recibir propiedades desde una ruta
  constructor(private router: Router) {
  this.titleSubs$ = this.loadTitle()
                      .subscribe(data => {
                        //Cambiar titulo del breadcumbs
                        this.title = data.title as string
                        //Cambiar titulo de la aplicación
                        document.title = `AdminPro - ${data.title}`
                      });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }


  loadTitle():Observable<Data> {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
