// SET CURRENT DATE AND LAST MODIFICATION
const yearSpan = document.getElementById("currentyear");

const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear ();
lastModified.textContent = `Last Modification: ${document.lastModified}`;



// ===============================
// COUNTRY DATA
// ===============================
const countryData = {
    area: "923,768 km²",
    population: "227 million",
    capital: "Abuja",
    languages: "English (official)",
    currency: "Naira (₦)",
    timezone: "UTC +1",
    callCode: "+234",
    internetTld: ".ng"
};

// WEATHER DATA (STATIC for WEEK 3)
const weatherData = {
    temperature: "30°C",
    condition: "Partly Cloudy",
    wind: "12 km/h",
    windChill: "N/A"
};


// ===============================
// POPULATE DATA SECTION
// ===============================
const dataList = document.querySelector(".data ul");
const dataItems = dataList.querySelectorAll("li");

const dataValues = [
    ["Area", countryData.area],
    ["Population", countryData.population],
    ["Capital", countryData.capital],
    ["Languages", countryData.languages],
    ["Currency", countryData.currency],
    ["Time Zone", countryData.timezone],
    ["Call Code", countryData.callCode],
    ["Internet TLD", countryData.internetTld]
];

dataItems.forEach((li, index) => {
    li.innerHTML = `<strong>${dataValues[index][0]}:</strong> ${dataValues[index][1]}`;
});


// ===============================
// POPULATE WEATHER SECTION
// ===============================
const weatherList = document.querySelector(".weather ul");
const weatherItems = weatherList.querySelectorAll("li");

const weatherValues = [
    ["Temperature", weatherData.temperature],
    ["Condition", weatherData.condition],
    ["Wind", weatherData.wind],
    ["Wind Chill", weatherData.windChill]
];

weatherItems.forEach((li, index) => {
    li.innerHTML = `<strong>${weatherValues[index][0]}:</strong> ${weatherValues[index][1]}`;
});


