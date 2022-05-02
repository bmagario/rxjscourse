import { fromEvent, interval, of } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$ = of('a', 'b', 'c');
letters$
.pipe(
	mergeMap(letter => interval(1000).pipe(
		map(i => letter + i),
		take(3)
	))
)
// .subscribe({
// 	next: (value) => console.log('next:', value),
// 	complete: () => console.log('complete')
// });


const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval();

mouseDown$
.pipe(
	mergeMap(() => 
		interval$
		.pipe(
			takeUntil(mouseUp$)
		)
	)
)
.subscribe(() => interval$.subscribe(console.log)); 