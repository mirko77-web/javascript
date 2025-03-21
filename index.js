
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


let parola = ""
do {
  parola = prompt("inserisci una parola")

} while (parola.length < 5)

let parole =  [];
for (let i = 1; i <= 5; i++){
  let parola = prompt (" inserisci una parola")
  parole.push(parola)
}
console.log (parole)


console.log("Parole con un numero dispari di lettere:");
for (let i = 0; i < parole.length; i++) {
  if (parole[i].length % 2 !== 0) { 
    console.log(parole[i]); 
  }
}


let numbers = [1,2,3,4,5]
console.log("numeri moltiplicati per due");
numbers.forEach((numero) =>{
  console.log (numero * 2)
})

let squaredNumbers = numbers.map ((numero)=> numero ** 2);
console.log("Array dei quadrati dei numeri:", squaredNumbers);



const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 45 },
  { name: "mario", grade: 70 },
  { name: "Franco", grade: 90 },
  { name: "Gino", grade: 55 }
];

const passedStudents = students.filter(student => student.grade >= 60);


const failedStudent = students.find(student => student.grade < 60);


console.log("Studenti promossi:", passedStudents);
console.log("Primo studente bocciato:", failedStudent);



const expenses = [100, 250, 75, 150, 300];

const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);

const words = ["banana", "apple", "cherry", "date"];

const sortedWords = words.sort();

console.log("Somma totale delle spese:", totalExpenses);
console.log("Array delle parole ordinate:", sortedWords);   

class Automobile {
  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
    this.#contatoreChiamate = 0;

  }
  descrizione() {
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }
  aggiungichilometri(km){
    this.chilometraggio += km;
  
  } 
  mostrachilometri (){
    return this.chilometraggio

  }

}
const miaAuto = new Automobile("jeep", "renegade", 2016 , 1000);
console.log(miaAuto.descrizione());
miaAuto.aggiungichilometri(50);

console.log (miaAuto.mostrachilometri ()) 




 
  class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia = 0) {
      super(marca, modello, anno, chilometraggio); 
      this.autonomia = autonomia;
    }
  
    descrizione() {
      return `Questa è una ${this.marca} ${this.modello} del ${this.anno}, con un'autonomia di ${this.autonomia} km.`;
    }
  
    ricarica(km) {
      km > 0 && (this.autonomia += km);
    }
  } 
  Automobile.prototype.saluta = function () {
    return `Ciao! Questa è una fantastica ${this.marca} ${this.modello}.`
  };


const annoCorrente = new Date().getFullYear();

const annoProduzione = 2016;


const etaAutomobile = annoCorrente - annoProduzione;

console.log(`L'età dell'automobile è ${etaAutomobile} anni.`)


  controllaChilometri () {

  }

#contatoreChiamate() {

};

#incrementaContatore() {
  this.#contatoreChiamate += 1;
}

getContatoreChiamate() {
  return this.#contatoreChiamate;
}

descrizione() {
  this.#incrementaContatore(); 
  return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
}


aggiungiChilometri(km) {
  if (km > 0) {
    this.chilometraggio += km; 
    console.log(`Sono stati aggiunti ${km} km. Chilometraggio aggiornato: ${this.chilometraggio} km.`);
  } else {
    console.log("Errore: i chilometri aggiunti devono essere un valore positivo.");
  }
}
mostraContatoreChiamate() {
  return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
}

get chilometraggio() {
  return this._chilometraggio;
}



class Automobile {
  
  constructor(marca, modello, anno, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;          
    this.anno = anno;                
    this._chilometraggio = chilometraggio; 
    this.#contatoreChiamate = 0;     
  }

  
  #contatoreChiamate;

  
  #incrementaContatore() {
    this.#contatoreChiamate++; 
  }

  
  
  get chilometraggio() {
    return this._chilometraggio; 
  }

  
  mostraContatoreChiamate() {
    return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`; 
  }

  
  descrizione() {
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}. Chilometraggio attuale: ${this._chilometraggio} km.`;
  }
}

class Automobile {
  constructor() {
    this.#contatoreChiamate = 0; 
  }

  #contatoreChiamate; 

  #incrementaContatore() {
    this.#contatoreChiamate++; 
  }

  aggiungiChilometri(km) {
    if (km > 0) {
      this.#incrementaContatore(); 
      console.log(`Chilometri aggiunti: ${km}`);
    } else {
      console.log("Errore.");
    }
  }

  mostraContatoreChiamate() {
    return ` aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
  }
}

class Automobile {
  constructor() {
      this.#contatoreChiamate = 0; // Contatore privato
  }

  #contatoreChiamate; // Variabile privata per contare le chiamate

  #incrementaContatore() {
      this.#contatoreChiamate++; // Incrementa il contatore
  }

  aggiungiChilometri(km) {
      if (km > 0) {
          this.#incrementaContatore(); // Aggiorna il contatore
          return `Chilometri aggiunti: ${km}`;
      } else {
          return "Errore: aggiungi un valore positivo.";
      }
  }

  mostraContatoreChiamate() {
      return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
  }
}


class Automobile {
  constructor(marca, modello, anno, chilometraggio = 0) {
      this.marca = marca;               // Marca dell'automobile
      this.modello = modello;           // Modello dell'automobile
      this.anno = anno;                 // Anno di fabbricazione
      this._chilometraggio = chilometraggio; // Chilometraggio iniziale
  }

  // Getter per la proprietà chilometraggio
  get chilometraggio() {
      return this._chilometraggio; // Restituisce il valore del chilometraggio
  }

  // Metodo per aggiungere chilometri
  aggiungiChilometri(km) {
      if (km > 0) {
          this._chilometraggio += km; // Incrementa il chilometraggio
          return `Sono stati aggiunti ${km} km. Chilometraggio attuale: ${this._chilometraggio} km.`;
      } else {
          return "Errore: i chilometri aggiunti devono essere un valore positivo.";
      }
  }
}

// Creazione di un'istanza della classe Automobile
const miaAuto = new Automobile("Fiat", "Panda", 2015);

// Collegamento al DOM
const chilometriForm = document.getElementById("chilometriForm");
const chilometraggioCorrente = document.getElementById("chilometraggioCorrente");

// Gestione dell'evento submit sul form
chilometriForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Previene il comportamento predefinito del form
  const chilometriInput = document.getElementById("chilometri");
  const chilometriDaAggiungere = parseInt(chilometriInput.value);

  // Aggiungi chilometri e aggiorna il DOM
  const risultato = miaAuto.aggiungiChilometri(chilometriDaAggiungere);
  alert(risultato); // Mostra un alert con il risultato
  chilometraggioCorrente.textContent = `Chilometraggio attuale: ${miaAuto.chilometraggio} km`; // Aggiorna il chilometraggio
  chilometriInput.value = ""; // Resetta il campo di input
});

 

  class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;               // Marca dell'automobile
        this.modello = modello;           // Modello dell'automobile
        this.anno = anno;                 // Anno di fabbricazione
        this._chilometraggio = chilometraggio; // Chilometraggio iniziale
        this.newchilometraggio = newchilometraggio;
    } 
    class Camion extends Automobile {
      constructor(marca, modello, anno, chilometraggio = 0, capacitaCarico = 0, caricoMassimo = 0) {
        super(marca, modello, anno, chilometraggio); 
        this.capacitaCarico = capacitaCarico;      
        this.caricoMassimo = caricoMassimo;      
      }
    
      descrizione() {
        return `${this.marca} ${this.modello} (${this.anno}) - Chilometraggio: ${this.chilometraggio} km, Carico attuale: ${this.capacitaCarico} kg, Carico massimo: ${this.caricoMassimo} kg.`;
      }
    
      carica(kg) {
        if (this.capacitaCarico + kg <= this.caricoMassimo) {
          this.capacitaCarico += kg;
          console.log(`Carico aggiunto: ${kg} kg. Carico attuale: ${this.capacitaCarico} kg.`);
        } else {
          console.log(`Errore: Non è possibile aggiungere ${kg} kg. Supererebbe il carico massimo di ${this.caricoMassimo} kg!`);
        }
      }
    }
    static verificaIstanza(obj, classe) {
      if (obj instanceof classe) {
          return `L'oggetto è un'istanza della classe ${classe.name}.`;
      } else {
          return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
      }
  }
}
 
const miaAutomobile = new Automobile("jeep", "renegade", 2017, 15000);
const mioCamion = new Camion("Mercedes", "Actros", 2018, 100000, 5000, 20000);


console.log(miaAutomobile instanceof Automobile); 
console.log(mioCamion instanceof Camion);         
console.log(mioCamion instanceof Automobile);     


console.log(Automobile.verificaIstanza(miaAutomobile, Automobile)); 
console.log(Automobile.verificaIstanza(mioCamion, Camion));         
console.log(Automobile.verificaIstanza(mioCamion, Automobile));     




descrizione() {
  return `Questa è una ${this.marca} ${this.modello} del ${this.anno}. Chilometraggio attuale: ${this.newchilometraggio} km.`;
}
    get.newchilometraggio(150000){
      console.log(this.newchilometraggio)
  }

  set chilometraggio(newChilometraggio) {
    if (newChilometraggio >= this._chilometraggio) {
        this.chilometraggio = newChilometraggio;
    } else {
        console.log("Errore: Il nuovo chilometraggio non può essere inferiore al valore corrente!");
    }
}


const numeri = [10, 20, 30, 40, 50];
const [primo, secondo] = numeri;

console.log("Primo elemento:", primo);  
console.log("Secondo elemento:", secondo); 

const numeri = [10, 20, 30, 40, 50];

const [primo, , terzo] = numeri; // Si salta il secondo elemento utilizzando una virgola vuota

console.log("Primo elemento:", primo);  // Output: Primo elemento: 10
console.log("Terzo elemento:", terzo);  // Output: Terzo elemento: 30*/

const numeri = [10, 20, 30];


const [primo = 0, secondo = 0, terzo = 0, quarto = 0, quinto = 0] = numeri;


console.log("Primo elemento:", primo); 
console.log("Secondo elemento:", secondo); 
console.log("Terzo elemento:", terzo);  
console.log("Quarto elemento:", quarto);  
console.log("Quinto elemento:", quinto);  
