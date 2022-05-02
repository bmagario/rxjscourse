/**
 * takeWhile
 * Emit values until provided expression is false.
 */

 import { fromEvent, interval } from "rxjs";
 import { takeUntil } from "rxjs/operators";
 
const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click');

counter$
.pipe(
	takeUntil(clickBtn$),
)
.subscribe({
	next: (value) => console.log(value),
	complete: () => console.log('complete')
});