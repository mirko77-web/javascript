
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
console.log("Terzo elemento:", terzo);  // Output: Terzo elemento: 30
const numeri = [10, 20, 30];


const [primo = 0, secondo = 0, terzo = 0, quarto = 0, quinto = 0] = numeri;


console.log("Primo elemento:", primo); 
console.log("Secondo elemento:", secondo); 
console.log("Terzo elemento:", terzo);  
console.log("Quarto elemento:", quarto);  
console.log("Quinto elemento:", quinto);  

const person = {
  firstName: "mirko",
  lastName: "prisciano",
  age: 31
};
let {firstName, lastName} = person;
console.log (person)

const { firstName: nomeUtente, age: anni } = person;


console.log("Nome utente:", nomeUtente); 
console.log("Anni:", anni); 

const persona = {
  nome: "Giulia",
  eta: 25
};

const { nome, cognome = "Non specificato", eta, professione = "Non specificata" } = persona;

console.log("Nome:", nome);          
console.log("Cognome:", cognome);    
console.log("Età:", eta);           
console.log("Professione:", professione); 

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)

const mycar = {
  brand: 'jeep',
  model: 'renegade',
  color: 'red'
}

const newMycar = {
  type: 'car',
  year: 2021, 
  color: 'black'
}

const newmycar = {...mycar, ...newMycar};
console.log(newmycar);



// Definizione della funzione
function somma(...numeri) {
  
  return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);
}

console.log(somma(1, 2, 3));       
console.log(somma(10, 20, 30, 40)); 
console.log(somma(5));            
console.log(somma());          

const numeri = [1,2,3,4,5]
const [a,b, ...rest] = numeri

console.log("Primo elemento:", a); 
console.log("Secondo elemento:", b); 
console.log("Resto degli elementi:", rest); 

  
 
const persona = {
  nome: "Luca",
  cognome: "Bianchi",
  eta: 28,
  professione: "Designer",
  città: "Roma"
};

const { nome, eta, ...resto } = persona;

console.log("Nome:", nome);          
console.log("Età:", eta);            
console.log("Resto delle proprietà:", resto); 
 
//per creare un pulsante e la risposta con codice html //
function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo").innerHTML = voteable + " to vote.";
}


//per creare una risposta alla funzione che vogliamo //
const hours = new Date().getHours();
if (hours<18) {
  risposta = "buongiorno";
} else{
  risposta= "buonsera"
}
console.log (risposta)

//per  cercare il giorni della settimana di oggi //
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log (day)
 
const cars = ["bmw", "jeep", "lancia", "opel", "mercedes"]
let text = "";
for (let i=0; i <cars.length; i++ ){
  text +=cars [i]+"<br>";
}
console.log(cars)

//per sapere quanti anni ha la macchina /
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);

//Conversione di un oggetto in una stringa JSON Dichiarare un oggetto JavaScript e utilizzare il metodo JSON.stringify 
// per convertirlo in una stringa JSON. Stampare la stringa JSON nella console.//

// Dichiarazione di un oggetto JavaScript
const persona = {
  nome: "mario",
  cognome: "Rossi",
  eta: 30,
  professione: "Ingegnere",
  hobbies: ["lettura", "calcio", "programmazione"]
};

const stringaJSON = JSON.stringify(persona);

console.log("Stringa JSON:", stringaJSON);


//Conversione di una stringa JSON in un oggetto//


const stringaJSON = '{"nome":"Mario","cognome":"Rossi","eta":30,"professione":"Ingegnere","hobbies":["lettura","calcio","programmazione"]}';

const oggettoJS = JSON.parse(stringaJSON);

console.log("Oggetto JavaScript:", oggettoJS);

console.log("Nome:", oggettoJS.nome);
console.log("Età:", oggettoJS.eta); 

//manipolazione dei dati json//

const stringaJSON = `[
  { "nome": "Mario", "cognome": "Rossi", "eta": 30 },
  { "nome": "Giulia", "cognome": "Bianchi", "eta": 28 },
  { "nome": "Luca", "cognome": "Verdi", "eta": 42 }
]`;


const listaPersone = JSON.parse(stringaJSON);

const nuovaPersona = { nome: "Anna", cognome: "Neri", eta: 30 };
listaPersone.push(nuovaPersona);


const stringaJSONAggiornata = JSON.stringify(listaPersone, null, 2);

console.log("Stringa JSON aggiornata:\n", stringaJSONAggiornata);


//stringa semplice con template literals//


const nome = "Mario";
const cognome = "Rossi";


const stringaCompleta = `Il mio nome è: ${nome} ${cognome}`;

console.log(stringaCompleta);

//Stringa multilinea con template literals//

const nome = "giovanni";
const cognome = "Neri";
const eta = 30;
const citta = "lecce";

const stringaMultilinea = `
Nome: ${nome}
Cognome: ${cognome}
Età: ${eta}
Città: ${citta}
`;

console.log("Informazioni sulla persona:\n", stringaMultilinea);

//Funzione e template literals//

function descriviPersona(persona) {
  return `Nome: ${persona.nome}
Cognome: ${persona.cognome}
Età: ${persona.eta} anni
Città: ${persona.citta}`;
}

const persona = {
  nome: "mario",
  cognome: "Neri",
  eta: 30,
  citta: "lecce"
};

const descrizione = descriviPersona(persona);
console.log(descrizione);

//utilizzare3 console.log//


const numero = 42;                    
const stringa = "Ciao, mondo!";        
const array = [1, 2, 3, 4, 5];          
const oggetto = {                       
  nome: "mirko",
  cognome: "prisciano",
  eta: 31
};

console.log("Numero:", numero);
console.log("Stringa:", stringa);
console.log("Array:", array);
console.log("Oggetto:", oggetto);


console.log(`Il mio nome è: ${oggetto.nome} ${oggetto.cognome}, e la mia età è ${oggetto.eta}.`);


//Utilizzare console.error e console.warn//

const statoSistema = "avviso"; 

if (statoSistema === "errore") {
  console.error("Errore critico: il sistema non può continuare!");
} else if (statoSistema === "avviso") {
  console.warn("Avviso: il sistema sta operando in modo non ottimale.");
} else {
  console.log("Il sistema funziona correttamente.");
}

//esempio 2//

const statoSistema = "errore"; 

if (statoSistema === "errore") {
  console.error("Errore critico: il sistema non può continuare!");
} else if (statoSistema === "avviso") {
  console.warn("Avviso: il sistema sta operando in modo non ottimale.");
} else {
  console.log("Il sistema funziona correttamente.");
}


//Utilizzare console.table e console.group//


const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 30 },
  { nome: "Giulia", cognome: "Bianchi", eta: 20 },
  { nome: "Luca", cognome: "Verdi", eta: 50 }
];


console.log("Stampa dell'array in formato tabella:");
console.table(persone);


console.group("Dettagli del sistema");
console.log("Sistema operativo: Windows 11");
console.log("Browser: Google Chrome");
console.log("Versione: 2025");
console.groupEnd();


console.group("Controllo utenti");
persone.forEach(persona => {
  console.group(`${persona.nome} ${persona.cognome}`);
  console.log(`Nome: ${persona.nome}`);
  console.log(`Cognome: ${persona.cognome}`);
  console.log(`Età: ${persona.eta}`);
  console.groupEnd();
});
console.groupEnd();


//Utilizzare setTimeout//

function stampaMessaggio() {
  console.log("ciao a tutti!");
}

setTimeout(stampaMessaggio, 3000); //appare dopo 3 secondi 

//Utilizzare setInterval//

function stampaMessaggio() {
  console.log("ciao mondo!");
}

setInterval(stampaMessaggio, 2000);  //Questo messaggio appare ogni 2 secondi


//clear intervall//

function stampaMessaggio() {
  console.log("ciao mondo!");
}

const intervallo = setInterval(stampaMessaggio, 1000);


setTimeout(() => {
  clearInterval(intervallo); 
  console.log("Intervallo interrotto dopo 5 secondi.");
}, 5000);


//Gestione di un errore semplice//

function eseguiDivisione(dividendo, divisore) {
  try {
    if (divisore === 0) {
      throw new Error("Errore: il divisore non può essere zero!");
    }

    const risultato = dividendo / divisore;
    console.log(`Risultato della divisione: ${risultato}`);
  } catch (errore) {
   
    console.error(errore.message);
  }
}

eseguiDivisione(10, 2); 
eseguiDivisione(10, 0); 


//Gestione di più tipi di errori//

function operaSuStringa(input) {
  try {

    if (typeof input !== "string") {
      throw new TypeError("Errore di tipo: il valore fornito non è una stringa!");
    }

    const risultato = input.toUpperCase();
    console.log(`Risultato dell'operazione: ${risultato}`);

  } catch (errore) {
    if (errore instanceof TypeError) {
      console.error(`Tipo di errore: ${errore.message}`);
    } else {
      console.error(`Errore generico: ${errore.message}`);
    }
  }
}

//Uso di finally per eseguire codice indipendentemente dal risultato//

function eseguiDivisione(dividendo, divisore) {
  try {
    if (divisore === 0) {
      throw new Error("Errore: il divisore non può essere zero!");
    }
    const risultato = dividendo / divisore;
    console.log(`Risultato della divisione: ${risultato}`);
  } catch (errore) {

    console.error(errore.message);
  } finally {

    console.log("Operazione completata.");
  }
}

eseguiDivisione(10, 2); 
eseguiDivisione(10, 0); 

//Funzione di base con callback//


function eseguiOperazione(a, b, callback) {

  const risultato = a + b;
  console.log(`Il risultato della somma è: ${risultato}`);

  if (typeof callback === "function") {
    callback(risultato);
  } else {
    console.error("Errore: il parametro non è una funzione.");
  }
}

function stampaRisultatoSomma(risultato) {
  console.log(`Il callback ha ricevuto il risultato: ${risultato}`);
}
eseguiOperazione(5, 7, stampaRisultatoSomma);



//Funzione con callback e passaggio di parametri//

function eseguiOperazioneECallback(a, b, callback) {

  const risultato = a + b;
  console.log(`Il risultato dell'operazione è: ${risultato}`);

  if (typeof callback === "function") {
    callback(risultato);
  } else {
    console.error("Errore");
  }
}

function moltiplicaRisultato(risultato) {
  const moltiplicazione = risultato * 2;
  console.log(`Il risultato moltiplicato per 2 è: ${moltiplicazione}`);
}

eseguiOperazioneECallback(5, 2, moltiplicaRisultato);



// Callback annidati//
function operazione1(valore, callback) {
  const risultato1 = valore * 5; 
  console.log(`Risultato della prima operazione: ${risultato1}`);
  

  if (typeof callback === "function") {
    callback(risultato1);
  }
}


function operazione2(valore, callback) {
  const risultato2 = valore + 10; // Esempio di operazione: aggiunge 10
  console.log(`Risultato della seconda operazione: ${risultato2}`);
  
 
  if (typeof callback === "function") {
    callback(risultato2);
  }
}

function eseguiOperazioni() {
  operazione1(5, (risultato1) => {
    operazione2(risultato1, (risultato2) => {
      console.log(`Risultato finale: ${risultato2}`);
    });
  });
}

eseguiOperazioni();


//creare una promessa semplice//

function promessaSemplice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cia a tutti!");
    }, 2000);
  });
}

promessaSemplice().then((messaggio) => {
  console.log(messaggio);
});


function verificaNumero(numero) {
  return new Promise((resolve, reject) => {
      if (numero > 0) {
          resolve(`Il numero ${numero} è valido!`);
      } else {
          reject(`Errore: il numero ${numero} non è valido.`);
      }
  });
}

// Utilizzo della promessa con gestione di catch
verificaNumero(-5)
  .then((messaggio) => {
      console.log(messaggio);
  })
  .catch((errore) => {
      console.error(errore);
  });

  function operazioneAsincrona(valore) {
    return new Promise((resolve, reject) => {
        if (valore > 0) {
            resolve(`Operazione completata con successo: il valore ${valore} è positivo.`);
        } else {
            reject(`Errore: il valore ${valore} è negativo o uguale a zero.`);
        }
    });
}

// Utilizzo della promessa con finally

function operazioneAsincrona(valore) {
  return new Promise((resolve, reject) => {
      if (valore > 0) {
          resolve(`Operazione completata con successo: il valore ${valore} è positivo.`);
      } else {
          reject(`Errore: il valore ${valore} è negativo o uguale a zero.`);
      }
  });
}

operazioneAsincrona(-5)
  .then((messaggio) => {
      console.log(messaggio); 
  })
  .catch((errore) => {
      console.error(errore); 
  })
  .finally(() => {
      console.log("L'operazione asincrona è terminata."); 
  });

  function generaNumero() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5); // Dopo 1 secondo restituisce il numero 5
        }, 1000);
    });
}


//catena di promesse semplici
function generaNumero() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(5);
      }, 1000);
  });
}

generaNumero()
  .then((numero) => {
      console.log(`Numero iniziale: ${numero}`);
      return numero * 2; 
  })
  .then((numeroMoltiplicato) => {
      console.log(`Dopo la moltiplicazione: ${numeroMoltiplicato}`);
      return numeroMoltiplicato + 3;
  })
  .then((risultatoFinale) => {
      console.log(`Risultato finale: ${risultatoFinale}`);
  })
  .catch((errore) => {
      console.error(`Errore: ${errore}`);
  });
  

// Catena di promesse con condizioni

  function generaNumero() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100); // Genera un numero casuale tra 0 e 99
            resolve(numero);
        }, 1000); // Simula un'attesa di 1 secondo
    });
}

generaNumero()
    .then((numero) => {
        console.log(`Numero generato: ${numero}`);
        if (numero % 2 === 0) {
            return numero * 2; // Se pari, moltiplica per 2
        } else {
            return numero + 1; // Se dispari, aggiungi 1
        }
    })
    .then((numeroManipolato) => {
        console.log(`Risultato finale: ${numeroManipolato}`);
    })
    .catch((errore) => {
        console.error(`Errore nella catena: ${errore}`);
    });

 //catene di promesse con gestione degli errori
   
    function casualePromessa() {
      return new Promise((resolve, reject) => {
          const valoreCasuale = Math.random(); // Genera un numero casuale 
          console.log(`Valore casuale generato: ${valoreCasuale}`); // Per vedere il valore casuale
  
          if (valoreCasuale > 0.5) {
              resolve(valoreCasuale); // Risolve la promessa con il valore casuale
          } else {
              reject("Errore: il valore casuale è troppo basso."); // Rifiuta la promessa
          }
      });
  }
  
  casualePromessa()
      .then((risultato) => {
          console.log(`Promessa risolta con valore: ${risultato}`);
          return risultato * 2; // Moltiplica il valore per 2
      })
      .then((valoreManipolato) => {
          console.log(`Valore manipolato: ${valoreManipolato}`);
          return valoreManipolato + 10; // Aggiunge 10 al valore
      })
      .then((valoreFinale) => {
          console.log(`Risultato finale: ${valoreFinale}`);
      })
      .catch((errore) => {
          console.error(errore); // Gestisce l'errore e lo stampa
      });
   

      function generaErrore() {
        return new Promise((resolve, reject) => {
            reject("Errore: la promessa è stata rifiutata!");
        });
    }
    
    generaErrore()
        .then((messaggio) => {
            console.log(messaggio); 
        })
        .catch((errore) => {
            console.error(errore); 
        });

 

        //Gestione degli errori con then e catch
        function promessaConCondizione(condizione) {
          return new Promise((resolve, reject) => {
              if (condizione) {
                  resolve("La promessa è stata risolta con successo!");
              } else {
                  reject("La promessa è stata rifiutata a causa della condizione.");
              }
          });
      }
      
      promessaConCondizione(true) 
          .then((messaggio) => {
              console.log(`Successo: ${messaggio}`); // Caso di successo
          })
          .catch((errore) => {
              console.error(`Errore: ${errore}`); // Caso di errore
          });     
//Gestione degli errori in una catena di promesse
          function generaPromessa() {
            return new Promise((resolve, reject) => {
                const valoreCasuale = Math.random(); // Genera un numero casuale tra 0 e 1
                console.log(`Valore casuale: ${valoreCasuale}`);
        
                if (valoreCasuale > 0.3) {
                    resolve(valoreCasuale); // Risolve la promessa se il valore > 0.3
                } else {
                    reject("Errore: il valore casuale è troppo basso."); // Rifiuta la promessa altrimenti
                }
            });
        }
        
        generaPromessa()
            .then((risultato) => {
                console.log(`Promessa risolta con valore: ${risultato}`);
                return risultato * 10; // Moltiplica il valore per 10
            })
            .then((valoreManipolato) => {
                console.log(`Valore manipolato: ${valoreManipolato}`);
                if (valoreManipolato > 5) {
                    throw new Error("Errore: il valore manipolato è troppo alto!"); // Genera un errore
                }
                return valoreManipolato + 5; // Aggiunge 5 se non ci sono errori
            })
            .then((valoreFinale) => {
                console.log(`Risultato finale: ${valoreFinale}`);
            })
            .catch((errore) => {
                console.error(`Gestione errore: ${errore}`); // Gestisce qualsiasi errore nella catena
            });
        
         
// Utilizzo di Promise.all 
            // Funzione 1
function primaPromessa() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Prima promessa risolta dopo 2 secondi");
      }, 2000);
  });
}

// Funzione 2
function secondaPromessa() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Seconda promessa risolta dopo 4 secondi");
      }, 4000);
  });
}


Promise.all([primaPromessa(), secondaPromessa()])
  .then((risultati) => {
      console.log("Tutte le promesse sono risolte:");
      console.log(risultati[0]); // Risultato della prima promessa
      console.log(risultati[1]); // Risultato della seconda promessa
  })
  .catch((errore) => {
      console.error(`Errore: ${errore}`); 
  });
  

//promise race

function promessaLenta() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Promessa lenta risolta dopo 3 secondi");
      }, 3000);
  });
}


function promessaVeloce() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Promessa veloce risolta dopo 1 secondo");
      }, 1000);
  });
}

Promise.race([promessaLenta(), promessaVeloce()])
  .then((risultato) => {
      console.log(`La prima promessa risolta è: ${risultato}`);
  })
  .catch((errore) => {
      console.error(`Errore nella promessa: ${errore}`);
  });


//promise allsettled
const myPromise1 = new Promise ((resolve,reject) => {
  settTimeout (resolve, 200, "king");

});

const myPromise2 = new Promise ((resolve, reject) => {
  setyTimeout (resolve, 100, "Queen");
});

const myPromise3 = new Promise ((resolve,reject) => {
  setTimeout (resolve, 50, soldati);
});

promise.allSettled = new Promise ((resolve, reject) => {
  setTimeout (resolve, 100, "Queen");
});
Promise.allSettled([myPromise1,myPromise2,myPromise3]).then((results) => 
  results.forEach((x) => myDisplay (x.status)),
);



// Funzione asincrona che utilizza await

function promessa() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("risolta con successo dopo 2 secondi!");
      }, 2000);
  });
}
async function funzioneAsincrona() {
  console.log("Attendo la risoluzione della domanda...");
  const messaggio = await promessa(); 
  console.log(messaggio); 
}

funzioneAsincrona();


// gestione degli errori con try e catch
function promessaCondizionale(condizione) {
  return new Promise((resolve, reject) => {
      if (condizione) {
          resolve("Promessa risolta con successo!");
      } else {
          reject("Errore: la promessa è stata rifiutata.");
      }
  });
}

async function gestisciPromessa(condizione) {
  try {
      console.log("Attesa della promessa...");
      const risultato = await promessaCondizionale(condizione); 
      console.log(risultato); 
  } catch (errore) {
      console.error(`Gestione errore: ${errore}`); 
  }
}


//funzioni asincrone in serie 
async function funzioneAsincrona1() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Risultato della funzione 1 dopo 2 secondi");
      }, 2000);
  });
}

async function funzioneAsincrona2() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Risultato della funzione 2 dopo 3 secondi");
      }, 3000);
  });
}

async function eseguiFunzioniInSerie() {
  console.log("Inizio esecuzione delle funzioni in serie...");

  const risultato1 = await funzioneAsincrona1();
  console.log(risultato1); 

  const risultato2 = await funzioneAsincrona2(); 
  console.log(risultato2); 

  console.log("Esecuzione completata!");
}
eseguiFunzioniInSerie();

async function eseguiRichiestaGET() {
  const url = "https://jsonplaceholder.typicode.com/posts"; 

  try {
      console.log("Eseguendo la richiesta GET...");
      const risposta = await fetch(url); // Esegue la richiesta GET
      if (!risposta.ok) {
          throw new Error(`Errore nella richiesta: ${risposta.status}`);
      }
      const dati = await risposta.json(); // Converte la risposta in formato JSON
      console.log("Dati ricevuti:", dati); // Stampa i dati nella console
  } catch (errore) {
      console.error("Errore durante la richiesta:", errore); // Gestisce eventuali errori
  }
}
;


  //eseguiRichiestaGET semplice
async function eseguiRichiestaGET() {
  const url = "https://jsonplaceholder.typicode.com/users"; 

  try {
      console.log("Eseguendo la richiesta GET...");
      const risposta = await fetch(url); 
      if (!risposta.ok) {
          throw new Error(`Errore HTTP: ${risposta.status}`); 
      }
      const dati = await risposta.json(); 
      console.log("Dati ricevuti:", dati); 
  } catch (errore) {
      console.error("Errore durante la richiesta:", errore); 
  }
}


eseguiRichiestaGET();

//Eseguire una richiesta POST
async function eseguiRichiestaPOST() {
  const url = "https://jsonplaceholder.typicode.com/posts"; 
  const dati = {
      title: "Esempio Titolo",
      body: "Questo è un esempio di contenuto.",
      userId: 123,
  };

  try {
      console.log("Eseguendo la richiesta POST...");
      const risposta = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json", 
          },
          body: JSON.stringify(dati), 
      });

      if (!risposta.ok) {
          throw new Error(`Errore HTTP: ${risposta.status}`); 
      }

      const risultato = await risposta.json(); 
      console.log("Dati restituiti dall'API:", risultato);
  } catch (errore) {
      console.error("Errore durante la richiesta POST:", errore); 
  }
}

eseguiRichiestaPOST();



// Gestione degli errori con async e await
async function eseguiRichiestaGET() {
  const url = "https://jsonplaceholder.typicode.com/posts"; 

  try {
      console.log("Eseguendo la richiesta GET...");
      const risposta = await fetch(url); 
      if (!risposta.ok) {
          throw new Error(`Errore HTTP: ${risposta.status}`); 
      }
      const dati = await risposta.json(); 
      console.log("Dati ricevuti:", dati); 
  } catch (errore) {
      console.error("Errore durante la richiesta:", errore); 
  }
}


eseguiRichiestaGET();

//
async function fetchData() {
  try {
      const risposta = await fetch("http://example.com");
      const dati = await risposta.json();
      console.log(dati);
  } catch (errore) {
      console.error("Errore durante la fetch:", errore);
  }
}

fetchData();
// Il server API (http://example.com) non include l'intestazione HTTP Access-Control-Allow-Origin,
//  che autorizza richieste provenienti da domini diversi.I browser, per proteggere gli utenti, 
// bloccano automaticamente tali richieste.
// 
// 


//utilizzare proxy
async function fetchDataConProxy() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; 
  const apiUrl = "http://example.com"; 

  try {
      console.log("Eseguendo la richiesta GET con proxy...");
      const risposta = await fetch(proxyUrl + apiUrl, {
          method: "GET",
          headers: {
              "X-Requested-With": "XMLHttpRequest", 
          },
      });
      if (!risposta.ok) {
          throw new Error(`Errore HTTP: ${risposta.status}`);
      }
      const dati = await risposta.json(); 
      console.log("Dati ricevuti:", dati); 
  } catch (errore) {
      console.error("Errore durante la richiesta GET con proxy:", errore);
  }
}

fetchDataConProxy();


//utilizza un api che supporta cors

async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
      console.log("Inviando una richiesta GET...");
      const response = await fetch(url); 
      if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
      }
      const data = await response.json(); 
      console.log("Dati ricevuti dall'API:", data); 
  } catch (error) {
      console.error("Errore durante la richiesta:", error); 
  }
}

fetchData();


// Funzione per salvare un cookie
function salvaCookie(nome, valore, giorni) {
  let data = new Date();
  data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000)); // Scadenza in giorni
  let scadenza = "expires=" + data.toUTCString();
  document.cookie = `${nome}=${valore}; ${scadenza}; path=/`;
  console.log(`Cookie salvato: ${nome}=${valore}`);
}

// Funzione per recuperare un cookie
function recuperaCookie(nome) {
  let nomeConUguale = nome + "=";
  let cookieArray = document.cookie.split("; ");
  for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      if (cookie.indexOf(nomeConUguale) === 0) {
          let valore = cookie.substring(nomeConUguale.length, cookie.length);
          console.log(`Cookie recuperato: ${nome}=${valore}`);
          return valore;
      }
  }
  console.log(`Cookie non trovato: ${nome}`);
  return null;
}

// Funzione per rimuovere un cookie
function rimuoviCookie(nome) {
  document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  console.log(`Cookie rimosso: ${nome}`);
}

//localstorage
// Funzione per salvare un valore nel localStorage
function salvaNelLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore); 
    console.log(`Valore salvato: ${chiave} = ${valore}`);
}

// Funzione per recuperare un valore dal localStorage
function recuperaDalLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave); 
    if (valore) {
        console.log(`Valore recuperato: ${chiave} = ${valore}`);
        return valore;
    } else {
        console.log(`Valore non trovato per la chiave: ${chiave}`);
        return null;
    }
}

// Funzione per rimuovere un valore dal localStorage
function rimuoviDalLocalStorage(chiave) {
    localStorage.removeItem(chiave); 
    console.log(`Valore rimosso per la chiave: ${chiave}`);
}

// Funzione per salvare un valore nel sessionStorage
function salvaNelSessionStorage(chiave, valore) {
  sessionStorage.setItem(chiave, valore); 
  console.log(`Valore salvato nel sessionStorage: ${chiave} = ${valore}`);
}

// Funzione per recuperare un valore dal sessionStorage
function recuperaDalSessionStorage(chiave) {
  const valore = sessionStorage.getItem(chiave); 
  if (valore) {
      console.log(`Valore recuperato dal sessionStorage: ${chiave} = ${valore}`);
      return valore;
  } else {
      console.log(`Valore non trovato per la chiave: ${chiave}`);
      return null;
  }
}

// Funzione per rimuovere un valore dal sessionStorage
function rimuoviDalSessionStorage(chiave) {
  sessionStorage.removeItem(chiave); 
  console.log(`Valore rimosso dal sessionStorage per la chiave: ${chiave}`);
}


// Funzione per salvare i dati in localStorage e sessionStorage
function saveData(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`Salvato -> localStorage: ${localStorage.getItem(key)}, sessionStorage: ${sessionStorage.getItem(key)}`);
}

// Funzione per recuperare i dati
function getData(key) {
  const localData = localStorage.getItem(key);
  const sessionData = sessionStorage.getItem(key);
  console.log(`Recuperato -> localStorage: ${localData}, sessionStorage: ${sessionData}`);
}

// Funzione per rimuovere i dati
function removeData(key) {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
  console.log(`Rimosso -> localStorage: ${localStorage.getItem(key)}, sessionStorage: ${sessionStorage.getItem(key)}`);
}
*/