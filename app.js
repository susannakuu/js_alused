let val

val = document.querySelectorAll('li');

const oddLi = document.querySelectorAll('li:nth-child(odd)');

const evenLi = document.querySelectorAll('li:nth-child(even)');

evenLi.forEach(function(li){
	li.style.background = '#4073FF';
});

oddLi.forEach(function(li){
	li.style.background = '#96C3EB';
});

console.log(even);