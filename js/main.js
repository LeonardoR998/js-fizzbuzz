// ! TRACCIA //

// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:

// Come faccio a sapere se un numero è divisibile per?

// Abbiamo visto qualcosa di particolare che possiamo usare?

// ! RACCOLTA DATI //
// numeri da 1 A 100
// multipli di 3 Fizz
// multipli di 5 Buzz
// multipli di entrambi FizzBuzz

// ! ELABORAZIONE //

// stampo i numeri da 1 a 100

const numberOfRepetions = 100;

for (let i = 0; i < numberOfRepetions; i++) {
  console.log(`Ripetizione ${i + 1}: indice ${i} `);

  //SE il numero è multiplo di 3 stampa Fizz
  if (i % 3 === 0) {
    console.log("Fizz");
    //ALTRIMENTI SE il numero è multiplo di 5 stampa Buzz
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // SE i numeri non sono divisibili per 3 o 5 stampa FizzBuzz
  if (!(i % 3 === 0 && i % 5 === 0)) {
    console.log("FizzBuzz");
  }
}
