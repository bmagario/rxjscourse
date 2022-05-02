import { of} from "rxjs";
import { startWith } from "rxjs/operators";


const numbers$ = of(1,2,3,4,5);

numbers$
.pipe(
	startWith(0)
).subscribe(console.log);