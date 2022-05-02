/**
 * first
 * Emit the first value or first to pass provided expression.
 */

 import { fromEvent } from "rxjs";
 import { first, map } from "rxjs/operators";
 
 
const click$ = fromEvent<MouseEvent>(document, 'click');
click$
.pipe(
	// map(event => ({
	// 	clientY: event.clientY,
	// 	clientX: event.clientX
	// }))
	map(({ clientX, clientY })=> ({
		clientX,
		clientY
	})),
	first(e => e.clientY >= 150)
)
.subscribe({
	next: val => console.log('next:', val),
	complete: () => console.log('complete')
});
