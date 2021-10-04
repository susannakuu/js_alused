//elemendi leidmine

const form = document.querySelector('form'); 
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h4');

taskInput.value = '';
//submit
//form.addEventListener('submit', runEvent);

//keyboard
//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
//taskInput.addEventListener('keypress', runEvent);

//input väljas fokuseerimine ja välja fokuseerimine
//taskInput.addEventListener('focus', runEvent);
//taskInput.addEventListener('blur', runEvent);

//taskInput.addEventListener('cut', runEvent);
//taskInput.addEventListener('paste', runEvent);
//taskInput.addEventListener('input', runEvent);




function runEvent(e) {
	console.log(`Event type: ${e.type}`);
	console.log(e.target.value);
	heading.innerText = e.target.value;
	//e.preventDefault();
}
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');

	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('x'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value ='';

	e.preventDefault();
}