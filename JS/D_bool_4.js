"use scrict";

var hasCreditCard = false;
var accountBalance = 42;
var itemCost = 43;

// UN UTILISATEUR VEUT FAIRE UN ACHAT
// VÉRIFIER QU'IL POSSÈDE UNE CARTE BANCAIRE OU QUE SON COMPTE PERSO EST SUFFISAMMENT APPROVISIONNÉ
// SI LES DEUX CONDITIONS SONT VÉRIFIÉES, PRIVILÉGIEZ L'UTILISATION DE OSN COMPTE PERSO

// les messages :
// - "vous n'avez pas de moyen de paiement" s'il n'y a pas de carte et que le compte perso est à zéro
// - "votre compte perso a été débité de X, le nouveau solde est Y" si le compte perso est suffisamment approvisionné, qu'il y est une carte ou non
// - "votre compte perso n'est pas assez approvisionné, il vous manque X" si le compte n'est pas suffisamment approvisionné et qu'il n'y a pas de carte
// - "vous allez être redirigé sur la page de paiement de votre banque" si le compte perso n'est pas suffisamment approvisionné et qu'il y est une carte

if (!hasCreditCard && accountBalance == 0) {
  console.log("vous n'avez pas de moyen de paiement");
  alert ("vous n'avez pas de moyen de paiement");
} else if (accountBalance >= itemCost) {
  accountBalance = accountBalance - itemCost;
  console.log("votre compte perso à été débité de " + itemCost + ", le nouveau solde est " + accountBalance);
  alert ("votre compte perso à été débité de X, le nouveau solde est Y");
} else if (accountBalance < itemCost && !hasCreditCard) {
  console.log("votre compte perso n'est pas assez approvisionné, il vous manque " + (itemCost - accountBalance));
  alert ("votre compte perso n'est pas assez approvisionné, il vous manque X");
} else if (accountBalance < itemCost && hasCreditCard) {
  console.log("vous allez être redirigé sur la page de paiement de votre banque");
  alert ("vous allez être redirigé sur la page de paiement de votre banque");
}
