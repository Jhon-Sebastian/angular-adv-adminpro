import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accont-settings',
  templateUrl: './accont-settings.component.html',
  styles: [
  ]
})
export class AccontSettingsComponent implements OnInit{

  constructor(private settingsService: SettingsService){}

  ngOnInit(){
    this.settingsService.checkCurrentSelector();
  }

  changeTheme(tema: string){
    this.settingsService.changeTheme(tema);
    this.settingsService.checkCurrentSelector();
  }


}
