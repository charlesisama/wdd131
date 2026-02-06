// SET CURRENT DATE AND LAST MODIFICATION
const yearSpan = document.getElementById("currentyear");

const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear ();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


const key = "reviewCount";
let count = Number(localStorage.getItem(key)) || 0;

count +=1;
localStorage.setItem(key, count);

const counterEl = document.querySelector("#reviewCount");
if (counterEl) counterEl.textContent = count;


