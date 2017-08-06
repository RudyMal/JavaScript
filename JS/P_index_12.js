"use strict";

function Fibonacci(i) {
  if (i<2){
    return i;
  }
  else {
    return Fibonacci(i-1) + Fibonacci(i-2);
  }
}

for (var i=0; i <= 25; i++) {
  var result = Fibonacci(i);
  console.log(result);
}
