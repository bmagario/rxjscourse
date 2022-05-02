/**
 * of
 * Emit variable amount of values in a sequence and then emits a complete notification.
 * 
 */
import { Observer, of } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

// const obs = of<number>(1, 2, 3, 4, 5);
const obs = of<any>(...[1, 2], Promise.resolve(true), function() {console.log('function')});
console.log('init');
obs.subscribe(observer);
console.log('end');