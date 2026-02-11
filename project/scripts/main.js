// SET CURRENT DATE AND LAST MODIFICATION
const yearSpan = document.getElementById("currentyear");

const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear ();
lastModified.textContent = `Last Modification: ${document.lastModified}`;



// Mobile nav toggle (accessible)
const navToggle = document.querySelector("#navToggle");
const siteNav = document.querySelector("#siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute(`${open}`);
  });
}
