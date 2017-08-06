"use strict";

var printForm=function() {
  var box=document.getElementById("box");
  box.innerHTML=
    "Lastname:" + document.getElementsById('lastname').value + "<br>" +
    "Firstname:" + document.getElementsById('firstname').value + "<br>" +
    "Birthday:" + document.getElementsById('birthday').value + "<br>" +
    "Age:" + document.getElementsById('age').value + "<br>" +
    "Email:" + document.getElementsById('email').value + "<br>" +
    "Password:" + document.getElementsById('password').value + "<br>" +
    "Submit:" + document.getElementsById('submit').value + "<br>";
}
