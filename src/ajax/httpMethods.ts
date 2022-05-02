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

// const obs$ = ajax.post(url, {
// 	id: 1,
// 	nombre: 'Brian'
// },{
// 	'Content-Type': 'application/json',
// 	'my-token': 'abc123'
// });

const obs$ = ajax({
	url,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'my-token': 'abc123'
	},
	body: {
		id: 1,
		nombre: 'Brian'
	}
});

obs$
.pipe(
	catchError(handleError)
).subscribe(console.log);
