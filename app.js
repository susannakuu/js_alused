const person = {
	fname: 'Kadi',
	lname: 'Tamm',
	age: 36,
	email: 'kadi.tamm@gmail.com',
	hobbies: ['tantsimine', 'muusika'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa'
	},
	getBirthYear: function() {
		return 2021 - this.age;
	}
};

let val;

val = person;

val = person.fname;
val = person['lname'];
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

const people = [
	{name: 'Kadi', age: 36},
	{name: 'Peeter', age: 40},
	{name: 'Mait', age: 15}

];

val = people;

for(let i = 0; i < people.lenght; i++){
	console.log(people[i].name);
}




console.log(val);