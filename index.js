let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

var whoRand = Math.floor(Math.random() * 4) ;  // returns a random integer from 0 to 3
// console.log("who " + whoRand);
var whatRand = Math.floor(Math.random() * 4) ;  // returns a random integer from 0 to 3
// console.log("what " + whatRand);
var whenRand = Math.floor(Math.random() * 5) ;  // returns a random integer from 0 to 4
// console.log("when " + whenRand);


var whoText = who[whoRand];
var whatText = what[whatRand];
var whenText = when[whenRand];


// console.log(whoText + " " + whatText +" " + whenText);

function writeExcuse() {
//   var excusa = document.getElementById("excusa");            
  var liststring = whoText + " " + whatText + " " + whenText;
  document.getElementById("excusa").innerHTML = liststring; 
    // document.getElementById("excusa").innerHTML = "prueba"; 
}