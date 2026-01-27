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

// WEATHER DATA 
const temperature = 30;
const windSpeed = 12;

const weatherData = {
    temperature: `${temperature}°C`,
    condition: "Partly Cloudy",
    wind: `${windSpeed} km/h`,
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


//==============================
//  WINDCHILL FUNCTION
//===============================

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);
}

let windChillText = "N/A";

// Do NOT call calculateWindChill unless conditions are met (Metric)
if (temperature <= 10 && windSpeed > 4.8) {
  const wc = calculateWindChill(temperature, windSpeed);
  windChillText = `${wc.toFixed(1)}°C`;
}

// Update the Wind Chill line in the existing list
weatherItems[3].innerHTML = `<strong>Wind Chill:</strong> ${windChillText}`;