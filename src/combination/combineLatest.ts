import { map } from 'rxjs/operators';
import { combineLatest, fromEvent, merge } from "rxjs";


// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');


// merge(
// 	keyup$.pipe(map(({type}) => type)),
// 	click$.pipe(map(({type}) => type))
// )
// .subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'Email';
input2.placeholder = '******';
input2.type = 'password';
document.querySelector('body').append(input1, input2);


const getInputStream = (elem: HTMLInputElement) => {
	return fromEvent(elem, 'keyup').pipe(
		map(({target}) => target),
		map(target => target as HTMLInputElement),
		map(target => target.value)
	);
};

combineLatest(
	getInputStream(input1),
	getInputStream(input2)
)
.subscribe(([email, password]) => console.log(email, password));
