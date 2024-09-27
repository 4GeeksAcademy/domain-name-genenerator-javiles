import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dog", "merchant", "driver"];

function generateDomains() {
  let domainList = document.getElementById("domainList");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ".com";
        let listItem = document.createElement("li");
        listItem.textContent = domain;
        domainList.appendChild(listItem);
      }
    }
  }
}

generateDomains();

console.log("Hello Rigo from the console!");
