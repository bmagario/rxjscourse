/**
 * reduce
 * Reduces the values from source observable to a single value 
 * that's emitted when the source completes.
 */

import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator, currentValue) => accumulator + currentValue;
const total = numbers.reduce(totalReducer, 0);
console.log(total);


interval(1000)
.pipe(
	take(3),
	tap(console.log),
	reduce(totalReducer)
)
.subscribe({
	next: val => console.log('next: '+ val),
	complete: () => console.log('complete')
});
