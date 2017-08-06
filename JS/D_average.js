"use strict";

var data = [
  {
    name: "user 1",
    scores: [42, 100, 54, 65, 32]
  },
  {
    name: "user 2",
    scores: [76, 64, 10, 67, 64]
  },
  {
    name: "user 3",
    scores: [93, 2, 56, 78, 100]
  }
];

// à partir de ces données :
// - afficher un tableau html contenant le nom des utilisateurs et leurs scores, triés par nom d'utilisateur
// - afficher un tableau html contenant le nom des utilisateurs et leurs scores moyen, triés par nom d'utilisateur
// - afficher un tableau html contenant les 5 meilleurs scores, le nom de l'utilisateur et la position du score, triés par ordre décroissant,

// indices :
// - vous pouvez parcourir le tableau de données avec une boucle for
// - pour lire le nom :
// - avec une boucle for avec index : data[i].name
// - avec une boucle for in : data[i].name
// - avec une boucle for of : user.name
// - pour lire le tableau de scores :
// - avec une boucle for avec index : data[i].scores
// - avec une boucle for in : data[i].scores
// - avec une boucle for of : user.scores

// exemple de crétion de code html en js et injection du code dans un élément

var html = "";

html = html + "<table class='table'>";

html = html + "<h3>" + "List All" + "</h3>";

html = html + "<thead>" + "<tr>";
html = html + "<th class='col-md-6'>" + "Username" + "</th>";
html = html + "<th class='col-md-6'>" + "Score" + "</th>";
html = html + "</tr>" + "</thread>";
html = html + "<tbody>";

for (var i = 0; i < data.length; i++) {
  html = html + "<tr>";
  html = html + "<td class='col-md-6'>" + data[i].name + "</td>";
  html = html + "<td class='col-md-6'>" + data[i].scores + "</td>";
  html = html + "</tr>";
  html = html + "</tbody>";
}

html = html + "</table>";

document.querySelector("#list-all").innerHTML = html;


html = html + "<table class='table'>";

html = html + "<h3>" + "List Average" + "</h3>";

html = html + "<thead>" + "<tr>";
html = html + "<th class='col-md-6'>" + "Username" + "</th>";
html = html + "<th class='col-md-6'>" + "Score" + "</th>";
html = html + "</tr>" + "</thread>";
html = html + "<tbody>";

for (var i = 0; i < data.length; i++) {
  html = html + "<tr>";
  html = html + "<td class='col-md-6'>" + data[i].name + "</td>";
  html = html + "<td class='col-md-6'>" + data[i].scores + "</td>";
  html = html + "</tr>";
  html = html + "</tbody>";
}

html = html + "</table>";

document.querySelector("#list-average").innerHTML = html;


html = html + "<table class='table'>";

html = html + "<h3>" + "List Best Scores" + "</h3>";

html = html + "<thead>" + "<tr>";
html = html + "<th class='col-md-6'>" + "Username" + "</th>";
html = html + "<th class='col-md-6'>" + "Score" + "</th>";
html = html + "</tr>" + "</thread>";
html = html + "<tbody>";

for (var i = 0; i < data.length; i++) {
  html = html + "<tr>";
  html = html + "<td class='col-md-6'>" + data[i].name + "</td>";
  html = html + "<td class='col-md-6'>" + data[i].scores + "</td>";
  html = html + "</tr>";
  html = html + "</tbody>";
}

html = html + "</table>";

document.querySelector("#list-best-scores").innerHTML = html;
