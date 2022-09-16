import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme')

  constructor() {
    this.loadDafaultTheme();
  }

  loadDafaultTheme(){
    const urlThemeCurrent = localStorage.getItem('theme');
    const urlThemeDefault = './assets/css/colors/default-dark.css'
    const url = urlThemeCurrent || urlThemeDefault;
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(tema: string){
    const newUrl = `./assets/css/colors/${tema}.css`
    this.linkTheme?.setAttribute('href', newUrl);
    localStorage.setItem('theme', newUrl);
  }

  checkCurrentSelector(): void{
    const links = document.querySelectorAll('.selector');
    links.forEach( element =>{
      element.classList.remove('working')
      const colorTheme = element.getAttribute('data-theme');
      const urlNewTheme = `./assets/css/colors/${colorTheme}.css`;
      const urlCurrentTheme = this.linkTheme?.getAttribute('href');
      if(urlNewTheme === urlCurrentTheme){
        element.classList.add('working');
      }
    })
  }
}
