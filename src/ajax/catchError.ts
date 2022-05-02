import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

// const catchErrors = (resp: Response) => {
// 	if (!resp.ok) {
// 		throw Error(resp.statusText);
// 	}
// 	return resp;
// }
// const fetchData = 
// fetch(url)
// 	.then(catchErrors)
// 	.then(resp => resp.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));

const catchErrors = (error: AjaxError) => {
	console.log('error: ', error);
	return of([]);
}
ajax(url)
	.pipe(
		pluck('response'),
		catchError(catchErrors)
	)
	.subscribe(console.log);