let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car','the mobile'];
let when = ['before the class','right on time','when I finished','during my lunch'];

let index1 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index2 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index3 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index4 = Math.floor(Math.random() * (3 - 0) ) + 0;

 
document.querySelector("#excuse").innerHTML=(who[index1]+" "+action[index2]+" "+what[index3]+" "+when[index4]);






