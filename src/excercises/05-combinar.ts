import { combineLatest, concat } from 'rxjs';
import { interval, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
/**
 * Ejercicio: Combinar ambos observables (letters$, numbers$)
 * para que las emisiones sean la concatenación de los últimos
 * valores emitidos
 */

//  Ejemplo de la tada esperada:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() =>{

    const letters  = ['a','b','c','d','e'];
    const numbers = [1,2,3,4,5];

    // Emite letters cada segundo
    const letters$  = interval(1000).pipe(
        map( i => letters[i] ),
        take( letters.length )
    );
    
    // Emite numbers del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas 
    const numbers$ = timer(500,1000).pipe(
        map( i => numbers[i] ),
        take( numbers.length )
    );

    // ========================================
    // Empezar a codificar aquí abajo
    // Nota, el subscribe debe de ser así
    // .subscribe( console.log )
    // Es decir, la salida en el subscribe debe 
    // de estar procesada en su totalidad
    // ========================================

			combineLatest(
				letters$,
				numbers$
			)
			.pipe(
				map( ([letter, number]) => `${letter}${number}`)
			)
			.subscribe(console.log);







})();

		