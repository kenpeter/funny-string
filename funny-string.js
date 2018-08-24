
function funnyString(s) {
	// step 1
	// javascript has issues that mute variable, bad
	const arr = s.split('');
	const revArr = s.split('').reverse();

	for(let i=1; i<arr.length; i++) {
		// step 2
		// curr - prev
		let first = arr[i].charCodeAt() - arr[i-1].charCodeAt();
		let second = revArr[i].charCodeAt() - revArr[i-1].charCodeAt();

		// step 3
		if(Math.abs(first) !== Math.abs(second))
			return 'Not Funny';
	} // end loop

	return 'Funny';
}

//let s = 'acxz';
let s = 'bcxz';
let out = funnyString(s);
console.log(out);
