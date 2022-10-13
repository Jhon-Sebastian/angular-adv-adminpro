import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccontSettingsComponent } from "./accont-settings/accont-settings.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

/*
  Se pueden especificar parametros en la ruta en la propiedad data
  el cual es un objeto donde podemos especificar todo la data
  que se requiera
*/

const routes: Routes = [
  {
    path: 'dashboard',
      component: PagesComponent,
      children: [
        {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
        {path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
        {path: 'grafica1', component: Grafica1Component, data: {title: 'Graphics'}},
        {path: 'account-settings', component: AccontSettingsComponent, data: {title: 'Settings'}},
        {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
        {path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'}}
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule{}
