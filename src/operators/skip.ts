/**
 * skip
 * Skip the provided number of emitted values.
 */

 import { fromEvent, interval } from "rxjs";
 import { takeUntil, skip } from "rxjs/operators";
 
const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click').pipe(skip(1));

counter$
.pipe(
	takeUntil(clickBtn$),
)
.subscribe({
	next: (value) => console.log(value),
	complete: () => console.log('complete')
});