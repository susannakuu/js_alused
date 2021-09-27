let val;


const today = new Date();

val = today.getMonth();  //0 on jaanuar
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //millisekundite arv alates unixi loomisest

let birthday = new Date('09/27/2001 11:00:00');
birthday = new Date('September 27 2001');

birthday.setMonth(2); //0-jaanuar
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(17);
birthday.setMinutes(17);
birthday.setSeconds(17);



console.log(birthday);
console.log(val);