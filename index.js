/*
 let element = document.createElement("h1");
 element.textContent = "Bienvenue sur le jeu Star wars !";
 document.body.appendChild(element);

 element = document.createElement("h2");
 element.textContent = "Que du fun assuré !";
 document.body.appendChild(element);
*/

createH(1, "Bienvenue sur le jeu Star wars");
createH(2, "Que du fun assuré !");

/**
 * Creates an header
 */
function createH(number, content) {
  let maVariable = 1;

  if (true) {
    let maVariableLet = 2;
    console.log("maVariableLet", maVariableLet);
  }
  // console.log("maVariableLet", maVariableLet);

  const element = document.createElement("h" + number);
  element.textContent = content;
  // element = document.createElement('div'); => ici ça plante car changement de référence
  document.body.appendChild(element);
}

var uneVariableGlobal = "essai";
uneVariableGlobal2 = 1;

console.log(element);
// console.log(maVariable); // plante ici car maVariable est déclarée dans la fonction en var
