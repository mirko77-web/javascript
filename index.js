
/*
let name = "Mirko"
const city = "lecce"

console.log (name,city)


let age = 5
console.log (age)

age = 10
console.log (age)

let number = 7
{let number = 10
    console.log (number)
}
console.log (number)



let outside = 12
{let inside = 23
    console.log (12)
    console.log (23)
}
console.log (12)
console.log (23)


for (let i = 0; i <= 20; i += 2) {
    console.log(i); 
  }


  
let numero = 9; 

while (numero >= 1) {
  console.log(numero); 
  numero -= 2; 
}

 let word = "ciao";
 console.log (word.length)  


let number = 7; 

if (number > 5) {
  console.log("La variabile è maggiore di 5");
} else {
  console.log("La variabile è minore o uguale a 5");
}


const prompt = require('prompt-sync')();
let score = parseInt(prompt("89"));

if (score >= 90 && score <= 100) {
  console.log("Voto ottimo");
} else if (score >= 70 && score <= 89) {
  console.log("Voto buono");
} else if (score >= 60 && score <= 69) {
  console.log("Voto sufficiente");
} else if (score <= 59) {
  console.log("Voto insufficiente");
} else {
  console.log("Valore non valido"); 
}


switch (category) {
  case 'ottimo':
    console.log("Voto ottimo");
    break;
  case 'buono':
    console.log("Voto buono");
    break;
  case 'sufficiente':
    console.log("Voto sufficiente");
    break;
  case 'insufficiente':
    console.log("Voto insufficiente");
    break;
  default:
    console.log("Valore non valido");
    break;
}


let numeri = [10, 20, 30, 40, 50];
console.log(numeri);


let numeri = [10, 20, 30, 40, 50];

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
  somma += numeri[i];
}

console.log(`La somma dei numeri contenuti nell'array è: ${somma}`);


let numeri = [10, 20, 30, 40, 50];

let numeriInvertiti = [];


for (let i = numeri.length - 1; i >= 0; i--) {
  numeriInvertiti.push(numeri[i]); 
}


console.log("Array originale:", numeri);

console.log("Array invertito:", numeriInvertiti);




let person = {
    name: "Mirko",
    age: 31,
    city: "lecce"
  };
  
  console.log(person.age)


 let person = {
    name: "Mirko",
    age: 31,
    city: "lecce"
  };
  person.age = 35;
  
  console.log(person.age);
   
  
 let person = {
    name: "Mirko",
    age: 31,
    city: "lecce"
  };

person.job = "developer";
console.log(person.)



let person = {
    name: "Mirko",
    age: 31,
    city: "lecce"
  };

for (let proprietà in person) {
    console.log(`Proprietà: ${proprietà}, Valore: ${person[proprietà]}`);
  } 
 
function outerFunction(x) {

    function innerFunction(y) {
      return x + y;
    }
    return innerFunction;
  }
    function createCounter() {
        let count = 0;
        return {
          increment: function() {
            count += 1; 
            return count; 
          },
          decrement: function() {
            count -= 1; 
            return count; 
          }
        };
      }
   
let student = {
    name: "mirko",
    age: 31,
    grade: "10th",
    school: "tecnico informatico"
  };
  
  let chiavi = Object.keys(student);

  console.log(chiavi);
  
  let student = {
    name: "mirko",
    age: 31,
    grade: "10th",
    school: "tecnico informatico"
  };
let valori = Object.values(student);
console.log(valori)
*/
let student = {
    name: "mirko",
    age: 31,
    grade: "10th",
    school: "tecnico informatico"
  };

let coppie = Object.entries(student);

console.log(coppie);

coppie.forEach(([chiave, valore]) => {
  console.log(`${chiave}: ${valore}`);
});