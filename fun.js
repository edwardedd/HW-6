//1
function printTimeout(str, n) {
	const tim = n*1000;
	const text = str;
	const set = setTimeout(()=>{
		console.log(text); 
	},tim );
	
};
printTimeout('hello', 4)

///2
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log( sumTo(5) );

////4
function factorial(num) {   
    if (num === 0) {
        // Both 1! and 0! are defined as 1
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(7));


/////5
function filterNumbers(arr, maxNumber) { 
	let newArr = [];
	arr.filter (number => {
		if (number < maxNumber){
			newArr.push(number);

		}

	});
	return newArr;
 };
 console.log(filterNumbers([1, 4, 8, 1, 20], 5));