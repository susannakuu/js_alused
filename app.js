let val
//document.getElementById();

val = document.getElementById("task-title");
val = document.getElementById("task-title").id;
val = document.getElementById("task-title").className;

const taskTitle = document.getElementById("task-title");

taskTitle.style.color = "purple";
//taskTitle.style.display = "none";   //võtab maha applied stilingud


// sisu muutmine
taskTitle.textContent = "My Tasks";
taskTitle.innerText = "Yada-Yada";
//taskTitle.innerHTML = '<span style="color: red;">My Tasks</span>'

//

val = document.querySelector('#task-title');
val = document.querySelector('.card-title');

document.querySelector('li').style.color = 'pink';
document.querySelector('li:last-child').style.color = 'fuchsia';
document.querySelector('li:nth-child(odd)').style.background = '#ffff';



console.log();