/**
 * distinct
 * Emits items emitted that are distinct based on any previously emitted item.
 */

import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const number$ = of(1,1,2,3,4, 3,5,6,1);

number$
.pipe(
	distinct()
)
.subscribe(console.log);

interface Character {
	name: string;
}

const characters$:Character[] = [
	{ name: 'Mario' },
	{ name: 'Luigi' },
	{ name: 'Bowser' },
	{ name: 'Peach' },
	{ name: 'Yoshi' },
	{ name: 'Bowser' },
];

from<Character[]>(characters$)
.pipe(
	distinct(c => c.name)
)
.subscribe(console.log);