var n = 0;
var m = 100;
for (i = 0; i < m; i++) {
	n = n + 1;
	switch (n < m) {
		case n % 3 === 0 && n % 5 === 0: console.log('FizzBizz'); break; 
		case n % 3 === 0: console.log('Fizz');  break;
		case n % 5 === 0: console.log('Bizz'); break;
		default: console.log(n); break;
	}
	
	
}

