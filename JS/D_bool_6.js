"use scrict";

// sur un site de E-commerce, un utilisateur doit fournir au moins un email ou un numéro de tél pour confirmer sa commande
// vérifier si l'utilisateur peut confirmer sa commande
// sinon dites-lui qu'il doit fournir au moins une des deux informations

var hasEmail = true;
var hasPhone = false;

if (hasEmail || hasPhone) {
  console.log("votre commande est confirmée");
} else {
  console.log("vous devez fournir au moins votre Email ou votre Phone");
}
