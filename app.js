/*const color = "red";

switch(color) {
	case 'red':
		console.log('stop!');
		break;
	case 'yellow':
		console.log('attention!');
		break;
	case 'green':
		console.log('Go!');
		break;
}
*/


let day = new Date('10/03/2021');
let dayNumber = day.getDay();
console.log(dayNumber);


switch(dayNumber) {
	case 0:
		console.log('Pühapäev');
		break;
	case 1:
		console.log('Esmaspäev');
		break;
	case 2:
		console.log('Teisipäev');
		break;
	case 3:
		console.log('Komapäev');
		break;
	case 4:
		console.log('Neljapäev');
		break;
	case 5:
		console.log('Reede');
		break;
	case 6:
		console.log('Laupäev');
		break;
}