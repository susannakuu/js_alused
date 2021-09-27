/*
if(tingimus) {
	// tegevused if puhul
} else {
	// tegevused else puhul
}


const id = 100;

// == - võrdub
// != - ei võrdu
// === - võrdub ja tüübikontroll
// !== - ei võrdu ja tüübikontroll

let testId;

if(typeof testId !== 'undefined'){
	console.log(`id on ${testId}`);
} else {
	console.log('id puudub');
}
*/
/*

if(id > 100) {
	console.log(`id on ${id} - suurem kui 100`);

} else {
	console.log(`id on ${id} - väiksem või võrdne 100`);
}
*/
/*
const color = "red";

if(color=== 'red') {
	console.log('Stop!');
} else if(color === 'yellow'){
	console.log('Attention');
} else (color === "green"){
	console.log('Go!')
}
*/

const name = 'Kadi';
const age = 15;
if(age > 0 && age <=22){
	console.log(`${name} on laps`);
} else if(age > 12 && age < 18){
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on täiskasvanud`);
}

if(age < 18 || age > 65){
	console.log(`${name} ei saa registreeruda`);
} else {
	console.log(`${name} on registreeritud`);
}

// ? - ternary operaator
console.log(id === 100 ? 'õige' : 'vale');

// ilma {}
if(id === 100)
	console.log('korras');
else
	console.log('ei ole korras');
