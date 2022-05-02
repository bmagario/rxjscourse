/**
 * interval
 * Emit numbers in sequence based on provided timeframe.
 * 
 * timer
 * After given duration, emit numbers in sequence every specified duration.
 * 
 */
import { Observer, interval, timer } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

const interval$ = interval(1000);
console.log('interval init');
interval$.subscribe(observer);
console.log('interval end');

const timer$ = timer(1000);
console.log('timer init');
timer$.subscribe(observer);
console.log('timer end');