/**
 * range
 * Emit numbers in provided range in sequence.
 * 
 */
import { Observer, range } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

const src$ = range(1, 10);

console.log('init');
src$.subscribe(observer);
console.log('end');