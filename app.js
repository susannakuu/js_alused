// for tsükkel
console.log('for tsükkel');
for(let i = 0; i < 10; i++){
	if(i == 5){
		//break;
		continue;
	}
	console.log(i);
}

// while tsükkel
console.log('while tsükkel');

let i = 0;
while(i<10){
	console.log(i);
	i++;
}

// do while
console.log('do while tsükkel');

let j = 0;
do {
	console.log(j);
	j++;
} while(j < 10);


// tsüklid ja massiivid
console.log('massiivid ja tsüklid');
const cars = ['Ford', 'Honda', 'Ferrari'];

// for tsükkliga 
for(let i = 0; i < cars.length; i++){
	console.log(cars[i]);
}

console.log();

// forÉach
cars.forEach(function(element, index, array){
	console.log(`cars[${index}] = ${element}`);
	console.log(array);
});


// forÉach - (arrow) => function
cars.forEach((element, index) => {
	console.log(`cars[${index}] = ${element}`);
});




// tsüklid ja objektid
const person = {
	firstname: 'Kadi',
	surname: 'Tamm',
	age: 25
}

// for in tsükkel
for(let key in person) {   //key = value
	console.log(`${key} = ${person[key]}`)
}     