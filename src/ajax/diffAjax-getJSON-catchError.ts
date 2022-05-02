import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const handleError = (err: AjaxError) => {
	console.error('Error: ', err.message);
	return of({
		ok: false,
		users: []
	});
};

const obs$ = ajax.getJSON(url)
.pipe(
	catchError(handleError)
);
const obs2$ = ajax(url)
.pipe(
	catchError(handleError)
);

// obs2$.subscribe(data => console.log(data));
obs$
.pipe(
	catchError(handleError)
)
.subscribe({
	next: val => console.log('next: ', val),
	error: err => console.warn('error: ', err),
	complete: () => console.log('complete') 
});