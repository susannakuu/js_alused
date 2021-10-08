// event elements
const taskList = document.querySelector('ul');

// click elemendi kustutamiseks
taskList.addEventListener('click', deleteTask);

const delBtn = document.querySelector('#delall');
delBtn.addEventListener('click', deleteTasks);

function deleteTask(e) {
	if(e.target.textContent == 'x'){
		if(confirm()){
			e.target.parentElement.remove();
		}
	}
}

function deleteTasks(e) {
	/*
	console.log(e.target);
	taskList.innerHTML = '';
	*/
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	} 
}	
	

