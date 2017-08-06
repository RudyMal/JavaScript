"use scrict";

// mini appli checklist vacance

function check() {
var gas = document.getElementById("gas").checked;
console.log(gas);

var inputs = document.getElementsByTagName("input");
for (var input of inputs) {
  console.log(input.checked);
}

inputs = document.getElementsByClassName("checklist-item");
for (var input of inputs) {
  console.log(input.checked);
}

inputs = document.querySelectorAll("div label input.checklist-item");
for (var input of inputs) {
  console.log(input.checked);
}

  var gas = document.getElementById("gas").checked;
  var electricity = document.getElementById("electricity").checked;
  var windows = document.getElementById("windows").checked;
  var key = document.getElementById("key").checked;

  if (gas && electricity && windows && key) {
    console.log("Vous pouvez y aller");
    alert("Vous pouvez y aller");
  } else {
    alert("Vous ne pouvez pas partir, vous avez oublier de cochez une case");
  }
}

// ou

// function check() {
//   var inputs = document.querySelectorAll("div label input.checklist-item");
//   for (var input of inputs) {
//     if (!input.checked) {
//       document.querySelector("#message").innerHTML = "attendez, il reste des choses à faire";
//       break;
//     } else {
//       document.querySelector("#message").innerHTML = "vous pouvez y aller";
//     }
//   }
// }

// ou

// function check() {
//   var inputs = document.querySelectorAll("div label input.checklist-item");
//
//   var result = true;
//   for (var input of inputs) {
//     if (!input.checked) {
//       result = false;
//       break;
//     }
//   }
//
//   if (result) {
//     document.querySelector("#message").innerHTML = "vous pouvez y aller";
//   } else {
//     document.querySelector("#message").innerHTML = "attendez, il reste des choses à faire";
//   }
// }
