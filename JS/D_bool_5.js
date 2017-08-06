"use scrict";

var authenticatedWithEmail = false;
var authenticatedWithPhone = true;

if (authenticatedWithEmail || authenticatedWithPhone) {
  console.log("vous êtes authentifié");
} else {
  console.log("vous n'êtes pas authentifié");
}
