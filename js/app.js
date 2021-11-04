/*
* Opgave beskrivelse:
ToDo: 1. Opret let med listContainer;
ToDo: 2. Opbyg LI element -> createElement();
ToDo: 3. Tilføj class fas og fa-trash-alt til <i> classList
ToDo: 4. Indsæt <p> og <i> ind i <li> appendChild();
ToDo: 5. Indsæt <li> ind i listContainer.  appendChild();
*/

/*
!Opgave: 03.11.2021
ToDo: 1. Opret en Array til at gemme produkter i.
ToDo: 2. Opret en ny funktion som skal læse Array via en for(){}
ToDo: 3. Vis indholdet af Array på siden.
ToDo: 4. Husk at gemme nye produkter når brugeren tilføjer dem.
*/

/*
!Opgave: 04.11.2021
ToDo: 1. Tilføj click event på slet knapperne.
ToDo: 2. Opret en funktion som skal håndtere sletning af <li>
ToDo: 3. Find product index ved at bruge indexOf().
ToDo: 4. Slet produktet fra Array ved at bruge splice(). 
ToDo: 5. Fjern <li> fra <ul> ved at bruge removeChild() og parentNode;
*/

let ulTag = document.getElementById("list-container");
let btn = document.querySelector("button");
let localPropductList = ["Mælk", "Brød", "Vand"];

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let inputData = document.getElementById("product");

  if (inputData.value != "") {
    localPropductList.push(inputData.value);
    saveEntry(inputData.value);
    inputData.value = "";
  } else {
    alert("Huskl at skrive produktnavn!");
  }
});

function saveEntry(productName) {
  let liTag = document.createElement("li");
  let pTag = document.createElement("p");
  let iTag = document.createElement("i");

  pTag.innerText = productName;

  iTag.classList.add("fas");
  iTag.classList.add("fa-trash-alt");

  /*
  ToDo : CLick event skal være på iTag variablen.
  */

  liTag.appendChild(pTag);
  liTag.appendChild(iTag);

  ulTag.appendChild(liTag);
}

function readLocalStorage(productList) {
  for (let index = 0; index < localPropductList.length; index++) {
    saveEntry(productList[index]);
  }
}
readLocalStorage(localPropductList);
