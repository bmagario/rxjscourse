/**
 * auditTime
 * Ignore for given time then emit most recent value
 */

import { fromEvent, tap } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
	tap((ev) => console.log('tap', ev)),
	auditTime(2000)
)
.subscribe(console.log);