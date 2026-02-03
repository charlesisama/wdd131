
// SET CURRENT DATE AND LAST MODIFICATION
const yearSpan = document.getElementById("currentyear");

const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear ();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


// HAMBUGER CLICK EVENT
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})


//FILTERED SECTION
// temple object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington_dc_temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city-temple.webp"
  },
  // Add more temple objects here...
   {
    templeName: "Salt lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 24",
    area: 382207,
    imageUrl:
    "images/salt-lake-temple.webp"
  },
   {
    templeName: "Salta Argetina",
    location: "Salta, Salta",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:
    "images/salta-argetina-temple.webp"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen Switzerland",
    dedicated: "1955, September, 15",
    area: 35546,
    imageUrl:
    "images/bern-switzerland-temple.webp"
  },
  
];

createTempleCard(temples);

let oldTemples = document.querySelector("#old");
let newTemples = document.querySelector("#new");
let smallTemples = document.querySelector("#small");
let largeTemples = document.querySelector("#large");

const pageTitle = document.querySelector("h1");




//Event for Old
oldTemples.addEventListener("click", () =>{

  pageTitle.textContent = "Old";
  
  const filteredOld = temples.filter(temple => {

  const year = parseInt(temple.dedicated.split(",")[0]);
  return year < 1900; 
  });

  createTempleCard(filteredOld); 

   });

newTemples.addEventListener("click", () =>{

  pageTitle.textContent = "New";
  
  const filteredNew = temples.filter(temple => {

  const year = parseInt(temple.dedicated.split(",")[0]);
  return year > 2000; 
  });

  createTempleCard(filteredNew); 

   });

// SMALL: area < 10000
smallTemples.addEventListener("click", () => {
  pageTitle.textContent = "Small";
  createTempleCard(temples.filter(t => t.area < 10000));
});

// LARGE: area > 90000
largeTemples.addEventListener("click", () => {
  pageTitle.textContent = "large";
  createTempleCard(temples.filter(t => t.area > 90000));
});




function createTempleCard (filteredTemples){
  document.querySelector(".figure-grid").textContent = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");


    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Area:</span> ${temple.area} sq ft`;

    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} temple`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    filteredTemples.forEach ((temple, index) => {
      if (index < 1){
        img.loading = "eager";
        img.fetchPriority = "high";
      }
      else{
        img.loading = "lazy";
      }
    });


    const textGroup = document.createElement("div");
    textGroup.classList.add("temple-info");

    textGroup.appendChild(name);
    textGroup.appendChild(location);
    textGroup.appendChild(dedication);
    textGroup.appendChild(area);

    card.appendChild(textGroup);
    card.appendChild(img);


    document.querySelector(".figure-grid").appendChild(card);
  });
}

//Reset Home
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Home";
  createTempleCard(temples);
});