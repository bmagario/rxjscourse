import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

const interval$ = new Observable<number>((subscriber) => {
	const intervalId = setInterval(() => {
		subscriber.next(Math.random());
	}, 1000);

	return () => {
		clearInterval(intervalId);
		console.log("Interval destroyed");
	}
});

const subject$ = new Subject();
const subscInterval = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setInterval(() => {
	subject$.next(10);	
	subject$.complete();
	subscInterval.unsubscribe();
}, 3000);