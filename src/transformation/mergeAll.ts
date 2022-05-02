import { IGithubUser, IGithubUsersResp } from './interfaces/utils';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeMap, pluck } from 'rxjs/operators';
import { fromEvent, Observable } from "rxjs";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const showUsers = (users: IGithubUser[]) => {
	orderList.innerHTML = '';
	for (const user of users) {
			const li = document.createElement('li');
			const img = document.createElement('img');
			img.src = user.avatar_url;

			const anchor = document.createElement('a');
			anchor.href = user.html_url;
			anchor.text = '+ more';
			anchor.target = '_blank';
			li.append(img);
			li.append(user.login + ' ');
			li.append(anchor);

			orderList.append(li);
	}
}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
.pipe(
	debounceTime<KeyboardEvent>(500),
	// pluck<KeyboardEvent>('target', 'value'),
	map<KeyboardEvent, string>(evento => evento.target['value']),
	mergeMap<string, Observable<IGithubUsersResp>>(text => ajax.getJSON(
		`https://api.github.com/search/users?q=${text}`
		)
	),
	// mergeMap<IGithubUsersResp>(),
	// pluck('items')
	map<IGithubUsersResp, IGithubUser[]>(item => item.items)
)
.subscribe(resp => showUsers(resp));