import { fromEvent } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// Helper
const httpRequestLogin = (userLogin) => {
	return ajax.post("https://reqres.in/api/login?delay=1", userLogin)
	.pipe(
		map(res => res.response),
		map(data => data['token']),
		catchError(err => {
			return err;
		})
	);
};

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Passowrd';
inputPass.value = 'abc123';

submitBtn.innerText = 'Submit';

form.append(inputEmail);
form.append(inputPass);
form.append(submitBtn);

document.querySelector('body').append(form);

const submitForm$ = fromEvent<Event>(form, 'submit');
submitForm$
.pipe(
	tap(e => e.preventDefault()),
	map(e => ({
		email: e.target[0].value,
		password: e.target[1].value
	})),
	switchMap(httpRequestLogin)
)
.subscribe(token => {
	console.log(token);
});




