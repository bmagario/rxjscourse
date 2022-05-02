/**
 * filter
 * Emit values that pass the provided condition.
 */

import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10)
.pipe(
	filter((x, i) => x % 2 === 0)
)
.subscribe(x => console.log(x));

interface ICharacter {
	type: string;
	name: string;
}

const characters:ICharacter[] = [
	{
		type: 'hero',
		name: 'Batman'
	},
	{
		type: 'hero',
		name: 'Robin'
	},
	{
		type: 'villain',
		name: 'Joker'
	},
];

from<ICharacter[]>(characters)
.pipe(
	filter(x => x.type === 'hero')
)
.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
	map(e => e.code),
	filter(code => code === 'Enter')
);
keyup$.subscribe(console.log);