const name = 'Susanna';
const age = 25;
const occupation = 'õpilane';
const city = 'Tartu';



let html;


	

html = '<ul>' +
			'<li>' + name + '</li>' +
			'<li>' + age + '</li>' + 
			'<li>' + occupation + 
			'<li>' + city + '</li>' +

		'</ul>';
		
// es6 - template strings

html = `
	<ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Occupation: ${occupation}</li>
		<li>City: ${city}</li>
	</ul>
	`;



console.log(html);

document.body.innerHTML = html;