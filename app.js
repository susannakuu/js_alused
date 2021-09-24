const numbers = [45, 22, 90, 683, 6];
const numbers2 = new Array(22, 55, 72, 3);
const fruit = ['õun', 'banaan'];
const mixed = [22, 'tere', true, undefined, null, {a:1, b:2}, new Date()];


let val;

val = numbers.lenght; //massiivi pikkus
val = Array.isArray(numbers); //kas on massiiv

val = numbers[3]; //kindel element
val = numbers[0];

numbers[2] = 100;

val = numbers.indexOf(36); //elemendi järgi index

numbers.push(250);  //element massiivi lõppu
numbers.unshift(90);  //ette
numbers.pop();  //lõpust maha
numbers.shift();  //eest maha

//console.log(numbers);


//numbers.splice(1, 3); //elementide lõikamine

//numbers.reverse(); //tagurpidi massiiv

val = numbers.concat(numbers2); //ühendamine

val = fruit.sort(); //sortimine

console.log(numbers);

//val = numbers.sort(function(x, y){
	reurn x - y;
//}); 


console.log(val);