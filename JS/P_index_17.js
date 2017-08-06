var info=function(){
  console.log("coucou");
  var heroname=document.getElementById('heroname').value;
  console.log(heroname);
  // localStorage.setItem('heroname',heroname);

  var agility=document.getElementById('agility').value;
  console.log(agility);
  // localStorage.setItem('agility',agility);

  var strength=document.getElementById('strength').value;
  console.log(strength);
  // localStorage.setItem('strength',strength);

  var endurance=document.getElementById('endurance').value;
  console.log(endurance);
  // localStorage.setItem('endurance',endurance);

  var total=parseInt(agility) + parseInt(strength) + parseInt(endurance);
  if (total == 100) {
    localStorage.setItem('heroname',heroname);
    localStorage.setItem('agility',agility);
    localStorage.setItem('strength',strength);
    localStorage.setItem('endurance',endurance);
  }
  else {
    alert("Le total de l'agilité, de la force et de l'endurance n'est pas égale à 100");
  }
}

var agility=localStorage.getItem('agility');
document.getElementById('agility').value=agility;
var strength=localStorage.getItem('strength');
document.getElementById('strength').value=strength;
var endurance=localStorage.getItem('endurance');
document.getElementById('endurance').value=endurance;
var heroname=localStorage.getItem('heroname');
document.getElementById('heroname').value=heroname;
