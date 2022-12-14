import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: "Principal",
      icon: 'mdi mdi-gauge',
      subMenuItems: [
        {title: 'Main', url: '/'},
        {title: 'Barra de Progreso', url: 'progress'},
        {title: 'Graficas', url: 'grafica1'},
        {title: 'Promesas', url: 'promises'},
        {title: 'Rxjs', url: 'rxjs'}
      ]
    }
  ]

  constructor() { }

}
