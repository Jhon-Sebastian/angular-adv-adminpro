import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//Indicamos a angular que confie en nosotros que existe una funcion global que traemos
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{

  constructor(private settingsService: SettingsService){}

  ngOnInit(): void {
    customInitFunctions();
  }

}
