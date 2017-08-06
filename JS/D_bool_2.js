"use scrict";

var stock = 100;

//afficher dans la console :

// - "stock indisponible" si le stock est à zéro
// - "stock en faible quantité" si le stock est plus petit que 50
// - "stock disponible" si le stock est plus grand ou égal à 50

if (stock == 0) {
  console.log("stock indisponible");
} else if (stock < 50) {
  console.log("stock en faible quantité");
} else if (stock >= 50) {
  console.log("stock disponible");
}
