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
	setTimeout (()=>{
		if(time>=1){
			console.log(time)
		return bombTimer(str, time-1);
	}else{
		console.log(str);
	}
	},1000)	
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
	let newCount = {};
	newCount.min = Math.min(...arr);
	newCount.max = Math.max(...arr);
	
	return newCount;
  
}
console.log(minMax([1, 4, 8, 2, 20]));

////8
function arrAvg(arr) {
  return arr.reduce((a,b) => a+b, 0)/arr.length;
}
console.log(arrAvg([1,4,2,8,14]).toFixed(2));


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



/////11   
const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) { 
	let secretMan="";
	users.forEach((usr)=>{
		let birth = new Date(usr.birthday);
		if (birth.getMonth() === month){	
		secretMan = usr;		
 		}; 		
	})
	return secretMan
}	
	
console.log(filterUsersByMonth(users, 0)) 
// [{ name: 'Bill', birthday: '1999-1-19' }]


/////12
const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) { 
	let result = [];
	const minYear = new Date().getFullYear();
	users.forEach((usr)=>{
		const usrYear = new Date(usr.birthday).getFullYear();
		const addult = minYear - usrYear;
		if (addult >=18){
			result.push(`${usr.name} ${addult}`);
		};
	});
	return result.join()
 }
 console.log(getAdultNames(users));
 























