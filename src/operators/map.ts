/**
 * map
 * Apply projection with each value from source.
 */

import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5).pipe(
// 	map<number, number>(x => x * 10)
// )
// .subscribe(x => console.log(x));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(
	map(e => e.code)
)
.subscribe(code => console.log(code));