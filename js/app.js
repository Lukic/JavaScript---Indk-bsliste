/*
* Opgave beskrivelse:
ToDo: 1. Opret let med listContainer;
ToDO: 2. Opbyg LI element -> createElement();
ToDo: 3. Tilføj class fas og fa-trash-alt til <i> classList
ToDo: 4. Indsæt <p> og <i> ind i <li> appendChild();
ToDo: 5. Indsæt <li> ind i listContainer.  appendChild();

*/

let btn = document.querySelector("button");
let localPropductList = [];

btn.addEventListener("click", () => {
  if (document.getElementById("product").value != "") {
    saveEntry(document.getElementById("product").value);

    document.getElementById("product").value = "";
  } else {
    alert("Huskl at skrive produktnavn!");
  }
});

function saveEntry(productName) {
  let ulTag = document.getElementById("list-container");

  let liTag = document.createElement("li");
  let pTag = document.createElement("p");
  let iTag = document.createElement("i");

  pTag.innerText = productName;

  iTag.classList.add("fas");
  iTag.classList.add("fa-trash-alt");

  liTag.appendChild(pTag);
  liTag.appendChild(iTag);

  ulTag.appendChild(liTag);

  localPropductList.push(productName);

  console.log(localPropductList);
}
