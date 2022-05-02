/**
 * scan
 * Reduce over time.
 */

 import { from, interval } from "rxjs";
 import { take, map, scan } from "rxjs/operators";
 
 
 const numbers = [1, 2, 3, 4, 5];
 
 const totalReducer = (accumulator, currentValue) => accumulator + currentValue;
 const total = numbers.reduce(totalReducer, 0);
 console.log(total);
 
 
 interval(1000)
 .pipe(
	 take(3),
	 scan(totalReducer)
 )
 .subscribe({
	 next: val => console.log('next: '+ val),
	 complete: () => console.log('complete')
 });
 
 
 // Redux
 interface IUser {
	 id?: string;
	 name?: string;
	 authenticated?: boolean;
	 token?: string;
	 age?: number
 }
 const user: IUser[] = [
	 { id: 'Brian', name: 'Brian', authenticated: true, token: 'ABC', age: 32 },
	 { id: 'John', name: 'John', authenticated: false, token: null, age: 32 },
	 { id: 'Jane', name: 'Jane', authenticated: true, token: 'ABCDE', age: 32 },
	 { id: 'Bob', name: 'Bob', authenticated: false, token: null, age: 32 },
	 { id: 'Mary', name: 'Mary', authenticated: false, token: null, age: 32 },
	 { id: 'Mike', name: 'Mike', authenticated: false, token: null, age: 32 }
 ];
 
 const state$ = from(user).pipe(
	 scan<IUser>((acc, curr) => {
		 return {
			 ...acc,
			 ...curr
		 }
	 }),
	 map(user => user.id)
 )
 .subscribe(console.log);