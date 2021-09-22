const eesnimi = 'Susanna';
const perenimi = 'Kuusemaa';
const age = '25';
const text = 'Tere, olen mina!'
const tags = 'igast'

let val;

//concatenation
val = eesnimi + ' ' + perenimi;
val = val + ' ' + age;
val = text + 'Teen ' + tags + ' asju!';
val = eesnimi.toUpperCase();
val = perenimi[0];
val = eesnimi.charAt(eesnimi.length -1);
val = text.split(',');




console.log(val);