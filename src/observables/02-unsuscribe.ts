import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

const interval$ = new Observable<number>((subscriber) => {
	let counter = 0;
	const interval = setInterval(() => {
		counter++;
		counter <= 5 ? subscriber.next(counter) : subscriber.complete();
	}, 1000);

	return () => {
		clearInterval(interval);
		console.log("Interval destroyed");
	};
});

interval$.subscribe(observer);