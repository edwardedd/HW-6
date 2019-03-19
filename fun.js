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

///3
function bombTimer(str, time){
	let timer = setInterval( function(){
		if (time >= 1){		
		console.log(time--)
	} else {
		console.log(str);
		clearInterval(timer);
	}
	},1000)	
}
bombTimer('booom',3)



////4
function factorial(num) {   
    if (num === 0) {
        
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(7));


/////5
function bombTimer(str, time){
	setTimeout( function timer(){
		if (time >= 1){		
		console.log(time--);
		setTimeout(timer,1000);
	} else {
		console.log(str);		
	}
	},0)	
}
bombTimer('booom',3)



/////6
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


//7
function minMax(arr){
  return 'max: ' + Math.max(...arr) + ' min: ' + Math.min(...arr);
}
console.log(minMax([1, 4, 8, 2, 20]));

////8
function arrAvg(arr) {
  return arr.reduce((a,b) => a+b, 0)/arr.length;
}
console.log(arrAvg([1,4,2,8,14]));


/////9
function concatFirstNestedArrays(arr) {
			let result = arr.reduce((sum, current)=>{
				return sum.concat(current);
			});
			console.log(result);
	
 }
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) 

/////10



function usersToObject(users){ 
	let newUser = {};
	for (i=0;i < users.length; i++){
		newUser[users[i]['id']] = users[i];
	}
	return newUser;
 }

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];
console.log(usersToObject(users));



/////11   неправильно зроблено. я переробляю
const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) { 
	return users.filter(function(date){
		if((date['birthday'].split('-'))[1] == month){
			return true;
		} else {
			return false;
		}
	});
 }
console.log(filterUsersByMonth(users, 0)) 
// [{ name: 'Bill', birthday: '1999-1-19' }]


































