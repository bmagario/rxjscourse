/**
 * fromEvent
 * Turn event into observable sequence.
 * 
 */
 import { Observer, fromEvent } from "rxjs";

 const observer: Observer<any> = {
	 next: (value) => console.log("[Next]", value),
	 error: (error) => console.warn("[Error]", error),
	 complete: () => console.info("[Complete]"),
 };
 
 const src1 = fromEvent<MouseEvent>(document, "click");
 const src2 = fromEvent<KeyboardEvent>(document, "keyup");
 
 src1.subscribe(({ x, y }) => {
	 console.log(x, y);
 });
 src2.subscribe(e => {
	 console.log(e.key);
 });