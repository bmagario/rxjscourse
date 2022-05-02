/**
 * asyncSchedule
 * Allow to create a timeout function but with a subscription.
 * 
 */
import { Observer, asyncScheduler } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

// const hello = () => console.log('Hello world');
// const helloName = (name) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(hello, 2000);
// asyncScheduler.schedule(helloName, 2000, 'Brian');

const subs = asyncScheduler.schedule(function(state) {
	console.log(state);
	this.schedule(state + 1, 1000);
}, 3000, 0);

setTimeout(() => {
	subs.unsubscribe();
}, 10000);
