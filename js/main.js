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

for (let i = 1; i <= 100; i++) {
  // SE il numero modulo 15 è uguale a 0
  if (i % 15 === 0) {
    // -stampo "FizzBuzz"
    console.log("FizzBuzz");
  }
  //ALTRIMENTI SE il numero è multiplo di 3
  else if (i % 3 === 0) {
    // -stampo "Fizz"
    console.log("Fizz");
  }
  //ALTRIMENTI SE il numero è multiplo di 5
  else if (i % 5 === 0) {
    // -stampo "Buzz"
    console.log("Buzz");
  }
  // ALTRIMENTI
  else {
    // -stampo N
    console.log(i);
  }
}
