/**
 * tap
 * Transparently perform actions or side-effects, such as logging.
 */
import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1,5);
numbers$
.pipe(
	tap(x => console.log('BEFORE: ', x)),
	map(x => x * 10),
	tap(x => console.log('AFTER: ', x))
)
.subscribe(x => console.log(x));