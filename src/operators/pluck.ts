/**
 * mapTo
 * Map emissions to constant value.
 */

import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(
	mapTo('Key pressed')
)
.subscribe(code => console.log(code));

