"use strict";

var myArray = [123, 42, 3.14, 100, 1, -2];
  console.log(myArray);

// boucle for of
for (var value of myArray) {
  console.log(value);
}

console.log(myArray);

// afficher les nombres supérieurs à 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 50) {
    console.log(myArray[i]);
  }
}

console.log(myArray);

// afficher les nombres compris entre 0 et 50
for (var i in myArray) {
  if (myArray[i] > 0 && myArray[i] < 50) {
    console.log(myArray[i]);
  }
}

console.log(myArray);

// afficher les nombres à virgule
for (var value of myArray) {
  if (!Number.isInteger(value)){
    console.log(value);
  }
}

console.log(myArray);

// afficher les nombres à virgule (méthode alternative)
for (var value of myArray) {
  if (value - Math.round(value) != 0) {
    console.log(value);
  }
}

console.log(myArray);
