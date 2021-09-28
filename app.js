// funktsiooni defineerimine (deklareerimine)
function greeting(firstname = 'Kadi', lastname = 'Tamm'){
	/*if(typeof firstname === 'undefined'){
		firstname ='Kadi';
	}
	if(typeof lastname === 'undefined'){
		lastname ='Tamm';
	}*/
	return 'Tere, ' + firstname + ' ' + lastname;
}
//funktsiooni tööle kutsumine

let greet = greeting('Susanna', 'Kuu');
console.log(greet);

console.log();
// funktsioon avaldise kujul
const square = function(number = 3){
	return number * number;
}

console.log(square());


// IIFE Immediately Invokable Function Expression
(function(){
	console.log('function ran');
})();

(function(name){
	console.log('Tere ' + name);
})('Susanna');

console.log();
// objekti siseselt defineeritud funktsioon
const todo = {
	add: function(){
		console.log('add todo nr...');
	},
	edit: function(id){
		console.log(`edit todo nr ${id}...`);
	},
	delete: function(){
		console.log('delete todo...');
	}
}

todo.add();
todo.edit(5);
todo.delete();


