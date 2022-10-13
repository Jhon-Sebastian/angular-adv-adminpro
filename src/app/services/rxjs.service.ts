import { Injectable, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RxjsService{


  //Cuando se crea un Observable si no se especifica nunca se va a detener , por ello existe el metodo unsuscribe para detenerlo, para ello se acostumbra a crear una propiedad/atributo que regrese un objetivo de tipo Suscribe y con esto traiga las funcionales para hacerlo cuando y donde deseos, esto se hace con el fin de tener que llamar obligatoriamente el unsuscribe luego de suscribirse al observable.  =====> a la propiedad que se crea se le asigna el $obs creado para luego limpiar lo que tenga dentro en ese caso el intervalo, esto se debe hacer en caso muy especiales, cuando se sabe que se tiene un $obs que emiti muchos valores o es muy ruidoso, cuando se cambien de vista se va a aplicar el metodo ngOnDestroy destruyendo el Suscribe

  //public internalSubs : Subscription;

  constructor() {
    /*
    this.basicInfoOfObservables().pipe(
      //Lo que hace el retry es volver a cagar el flujo de datos del obs
      //Podemos pasar por argumento las veces que quiera reintentar el obs
      retry(1)
    )
      .subscribe(
        valor => console.log('Susb: ', valor),
        err => console.warn('Error: ', err),
        () => {
          console.info('Obs Terminado')
        }
      )
      */

    //this.internalSubs = this.returnInterval().subscribe(val => console.log(val))

  }

  //ngOnDestroy(): void {
    //console.log('Destruido por perro')
    //this.internalSubs.unsubscribe();
  //}

  returnInterval(): Observable<any> {
    return interval(100)
      .pipe(
        //Map transforma cada valor en lo que quiera en este caso le suma 1 a cada element
        map(value => value + 1),
        //Filter se encarga de evaluar una expresion booleana, si es true lo pasa de lo contrario no lo hara
        filter(value => value % 2 === 0 )
        //Take indica cuantas emisiones del obs necesita y completa el obs
        //take(10),
      )
  }



  basicInfoOfObservables(): Observable<number> {

    /*

    Es un estandar poner $ a los nombres de Observables pero no obligatorio
    dentro del argumento, lleva el cuerpo o lo que quiere que haga
    por ejemplo recibe un Suscriber

    El observer es el que va a emitir valores, cuando se termina
    o da error

    El suscriber va a decir como esta el observable y que informacion
    fluye a traves de el

    */

    /* Si no se ejecuta es porque el Observable sabe que nadie se ha suscrito
      por lo cual nadie esta escuchando */


    let i = -1

    const obs$ = new Observable<number>((observer) => {

      const intervalo = setInterval(() => {
        i++
        //Se encargara de notificar a quien escucha a los suscritos
        observer.next(i)

        //Para cancelar el observer y que no consuma mucha memoria
        //cuando se ejecuten varios en paralelo
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        //Si se dispara el error el nunca llega al complete
        if (i === 2) {
          observer.error('Ocurrio un error')
        }
      }, 1000);
    })

    //Como estoy suscrito puede obtener el valor en este caso el (i)
    //Primer argumento es la funcion que se ejecuta
    //Segundo argumento cuando ocurre un error
    //Tercer agumento cuando se completa el observable

    /*
      Pipe es una conexion a una manguera, permitiendo extender mas
      la manguera o agregar un extension
      ** Es un forma de transformar el flujo de data que tiene el
      observable o reintar a hacer
    */
    return obs$
  }

}
