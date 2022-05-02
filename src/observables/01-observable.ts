import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("[Next]", value),
	error: (error) => console.warn("[Error]", error),
	complete: () => console.info("[Complete]"),
};

const obs$ = new Observable<string>(subscriber => {
	subscriber.next('Hello');
	subscriber.next('World'); 
	subscriber.next('Hello');  
	subscriber.next('World'); 
	subscriber.complete();
	subscriber.next('World');  
});

const x = obs$.subscribe(observer);
x.unsubscribe();