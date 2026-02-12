// scripts/data.js

const destinations = [
  {
    id: "lagos",
    name: "Lagos",
    city: "Lagos",
    region: "South West",
    type: "City",
    tags: ["beaches", "nightlife", "arts", "business"],
    image: {
        small: "images/lagos-small.webp",   // 320×213
        medium: "images/lagos-medium.webp", // 600×400
        large: "images/lagos.webp"          // 900×600
      },
    alt: "Lagos skyline and coastal atmosphere.",
    blurb: "Nigeria’s busiest city—known for beaches, entertainment, and commerce."
  },
  {
    id: "abuja",
    name: "Abuja (Aso Rock)",
    city: "Abuja",
    region: "North Central",
    type: "Landmark",
    tags: ["capital", "rock", "modern", "sightseeing"],
    image: {
        small: "images/abuja-aso-rock-small.webp",   // 320×213
        medium: "images/abuja-aso-rock-medium.webp", // 600×400
        large: "images/abuja-aso-rock.webp"          // 900×600
      },
    alt: "Aso Rock near Abuja.",
    blurb: "Visit Nigeria’s capital and the iconic Aso Rock formation."
  },
  {
    id: "olumo",
    name: "Olumo Rock",
    city: "Abeokuta",
    region: "South West",
    type: "Landmark",
    tags: ["history", "rock", "hiking", "culture"],
    image: {
        small: "images/olumo-rock-small.webp",   // 320×213
        medium: "images/olumo-rock-medium.webp", // 600×400
        large: "images/olumo-rock.webp"          // 900×600
      },
    alt: "Olumo Rock in Abeokuta.",
    blurb: "A historic rock site with panoramic views and cultural significance."
  },
  {
    id: "yankari",
    name: "Yankari Game Reserve",
    city: "Bauchi",
    region: "North East",
    type: "Nature",
    tags: ["wildlife", "safari", "park", "nature"],
    image: {
        small: "images/yankari-small.webp",   // 320×213
        medium: "images/yankari-medium.webp", // 600×400
        large: "images/yankari.webp"          // 900×600
      },
    alt: "Wildlife scene representing Yankari Game Reserve.",
    blurb: "One of Nigeria’s best-known wildlife reserves for safari experiences."
  },
  {
    id: "erin-ijesha",
    name: "Erin Ijesha Waterfalls",
    city: "Erin Ijesha",
    region: "South West",
    type: "Nature",
    tags: ["waterfall", "hiking", "scenery", "adventure"],
    image: {
        small: "images/erin-ijesha-small.webp",   // 320×213
        medium: "images/erin-ijesha-medium.webp", // 600×400
        large: "images/erin-ijesha.webp"          // 900×600
      },
    alt: "A multi-level waterfall representing Erin Ijesha.",
    blurb: "A multi-level waterfall destination for hikes and cool scenery."
  },
  {
    id: "calabar",
    name: "Calabar",
    city: "Calabar",
    region: "South South",
    type: "City",
    tags: ["festival", "culture", "tourism", "carnival"],
    image: {
        small: "images/calabar-small.webp",   // 320×213
        medium: "images/calabar-medium.webp", // 600×400
        large: "images/calabar.webp"          // 900×600
      },
    alt: "City view representing Calabar tourism.",
    blurb: "Popular for tourism, hospitality, and the Calabar Carnival season."
  },
  {
    id: "lekki",
    name: "Lekki Conservation Centre",
    city: "Lagos",
    region: "South West",
    type: "Nature",
    tags: ["canopy", "nature", "walkway", "family"],
    image: {
        small: "images/lekki-conservation-small.webp",   // 320×213
        medium: "images/lekki-conservation-medium.webp", // 600×400
        large: "images/lekki-conservation.webp"          // 900×600
      },
    alt: "Walkway scene representing Lekki Conservation Centre.",
    blurb: "A peaceful nature reserve with a famous canopy walkway."
  },
  {
    id: "osun-osogbo",
    name: "Osun-Osogbo Sacred Grove",
    city: "Osogbo",
    region: "South West",
    type: "Culture",
    tags: ["heritage", "festival", "art", "spiritual"],
    image: {
        small: "images/osun-osogbo-small.webp",   // 320×213
        medium: "images/osun-osogbo-medium.webp", // 600×400
        large: "images/osun-osogbo.webp"          // 900×600
      },
    alt: "Forest setting representing Osun-Osogbo Sacred Grove.",
    blurb: "A cultural heritage site known for art, history, and annual festivals."
  }
];
