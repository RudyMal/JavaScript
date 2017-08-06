"use scrict";

var hasValidAddress = false;
var hasValidatedAgreement = false;

// afficher dans la console :
// - "commande en cours" si hasValidAddress et hasValidatedAgreement sont vrais
// - "vous devez renseigner une adresse" si hasValidAddress est faux
// - "vous devez cochez la case Condition de vente" si hasValidatedAgreement est faux
// - "vous devez renseigner une adresse et vous devez cocher la case Condition de vente" si hasValidAddress et hasValidatedAgreement sont fausses

if (hasValidAddress == true && hasValidatedAgreement == true){
  console.log("commande en cours");
} else if (hasValidAddress == false && hasValidatedAgreement == true) {
  console.log("vous devez renseigner une adresse");
} else if (hasValidatedAgreement == false && hasValidAddress == true) {
  console.log("vous devez cochez la case Condition de vente");
} else if (hasValidAddress == false && hasValidatedAgreement == false) {
  console.log("vous devez renseigner une adresse et vous devez cocher la case Condition de vente");
}
