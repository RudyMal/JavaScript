"use strict";

// déclaration et initialisation d'un tableau avec 3 éléments
var myArray = [123, 42, 3.14, "Hello"];

// si le tableau contient au moins un élément,
// modifier le premier élément
if (myArray.length > 0) {
  myArray[0] = 1;
}

// si le tableau contient au moins un élément,
// modifier le dernier élément

if (myArray.length > 0) {
  myArray[myArray.length - 1] = "Salut";
}

console.log(myArray);
