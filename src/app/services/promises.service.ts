import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {



  constructor() { }

 /*
    Mas optimo, pero a su ves regresa la data la cual se pase por
    argumento del metodo y se hago lo que se quiera
    getUsuarios( usuarios => { console.log(usuarios)})
    Se puede hacer con asyn - await o de varias formas
  */
  requestHttpToAPIUsers(){
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve(body.data))
    })
  }


  documentation(){
    /*
    Usar Fetch API para hacer promises mas facil
    y con funciones que es lo usual, es propio de javascript

    Funcionario pero no es optimo
    getUsuarios(){
    //Regresa una promesa
    fetch('https://reqres.in/api/users')
      .then( resp => {
        //Para estraer el body con la data
        resp.json().then( info => console.log(info.data))
      })
  }
  */
  }


  explicationBasicPromises(){
  /*
      Promesa, la parametro resolve es una convecion pero se
      puede poner el nombre que se quiera, el resolve se
      encagara de enviar el string o parametro ademas
      de que todo salio bien

      El parametro reject es para cuando ocurrio un error
    */

      const promise = new Promise( ( resolve, reject ) =>{

        if( false ){
          resolve('Hello world from new promise');
        }else{
          //Arrojar un error con colo rojo de alerta
          reject('Ocurrio un error')
        }

      });

      /*
        Para recibir y hacer algo con el string,
        tiene 3 metodos, cath-> error, finally-> no importa
        si sale bien o mal se ejecuta, then -> sale bien y
        con otra funcion se puede manejar el resultado

        y cuando se ejcuta algun metodo de este si seria
        asincrono (se ejecuta en paralelo)
      */
     promise.then( (mensaje) => {
        console.log(`Hey termine, ${mensaje}`);

     })
     .catch( error =>{
        console.log(`Error en mi promesa= [${error}]`);
     })

      console.log('End the Init method');
  }

}
