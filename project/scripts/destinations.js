// scripts/destinations.js

const STORAGE_KEYS = {
  favorites: "en_favorites",
  region: "en_region",
  type: "en_type",
  search: "en_search",
  view: "en_view"
};

const els = {
  region: document.querySelector("#region"),
  type: document.querySelector("#type"),
  search: document.querySelector("#search"),
  view: document.querySelector("#view"),
  reset: document.querySelector("#reset"),
  cards: document.querySelector("#cards"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsMeta: document.querySelector("#resultsMeta")
};


//LOCAL STORAFGE 
function readJSON(key, fallback) {
  const rawfile = localStorage.getItem(key);
  if (!rawfile) return fallback;
  try {
    return JSON.parse(rawfile);
  }
  catch (err) {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFavorites() {
  return readJSON(STORAGE_KEYS.favorites, []);
}

function setFavorites(favs) {
  writeJSON(STORAGE_KEYS.favorites, favs);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateSelect(selectEl, items) {
  const options = items.map(item => `<option value="${item}">${item}</option>`).join("");
  selectEl.insertAdjacentHTML("beforeend", `${options}`);
}

function restoreState() {
  const region = localStorage.getItem(STORAGE_KEYS.region) || "all";
  const type = localStorage.getItem(STORAGE_KEYS.type) || "all";
  const search = localStorage.getItem(STORAGE_KEYS.search) || "";
  const view = localStorage.getItem(STORAGE_KEYS.view) || "all";

  els.region.value = region;
  els.type.value = type;
  els.search.value = `${search}`;
  els.view.value = view;
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.region, `${els.region.value}`);
  localStorage.setItem(STORAGE_KEYS.type, `${els.type.value}`);
  localStorage.setItem(STORAGE_KEYS.search, `${els.search.value}`);
  localStorage.setItem(STORAGE_KEYS.view, `${els.view.value}`);
}

function matchesSearch(place, q) {
  const query = q.trim().toLowerCase();
  if (query === "") return true;

  const haystack = [
    place.name,
    place.city,
    place.region,
    place.type,
    ...place.tags
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function filterDestinations() {
  const region = els.region.value;
  const type = els.type.value;
  const q = els.search.value;
  const view = els.view.value;
  const favorites = getFavorites();

  const filtered = destinations
    .filter(place => (region === "all" ? true : place.region === region))
    .filter(place => (type === "all" ? true : place.type === type))
    .filter(place => matchesSearch(place, q))
    .filter(place => (view === "favorites" ? favorites.includes(place.id) : true));

  return filtered;
}

function cardTemplate(place, isFav) {
  const favText = isFav ? "Remove Favorite" : "Save Favorite";
  const favBadge = isFav ? `<span class="badge">★ Favorite</span>` : "";

  const img = place.image;

  return `
    <article class="place-card">
      <img
        src="${img.large}"
        srcset="
          ${img.small} 320w,
          ${img.medium} 600w,
          ${img.large} 900w
        "
        sizes="(min-width: 64em) 300px, (min-width: 40em) 45vw, 90vw"
        alt="${place.alt}"
        loading="lazy"
        width="900"
        height="600"
      >
      <div class="content">
        <div class="meta">
          <span class="badge">${place.region}</span>
          <span class="badge">${place.type}</span>
          ${favBadge}
        </div>
        <h3>${place.name}</h3>
        <p>${place.blurb}</p>
        <div class="actions">
          <button class="button" type="button" data-action="favorite" data-id="${place.id}">
            ${favText}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderResults(list) {
  const favorites = getFavorites();
  const cardsHTML = list
    .map(place => cardTemplate(place, favorites.includes(place.id)))
    .join("");

  els.cards.innerHTML = `${cardsHTML}`;

  const count = list.length;
  const mode = els.view.value === "favorites" ? "Favorites" : "All";
  els.resultsTitle.textContent = "Results";
  els.resultsMeta.textContent = `${mode}: ${count} destination${count === 1 ? "" : "s"} found.`;
}

function toggleFavorite(id) {
  const favorites = getFavorites();

  const exists = favorites.includes(id);
  const updated = exists
    ? favorites.filter(x => x !== id)
    : [...favorites, id];

  setFavorites(updated);
}

function handleControlsChange() {
  persistState();
  const filtered = filterDestinations();
  renderResults(filtered);
}

function handleReset() {
  els.region.value = "all";
  els.type.value = "all";
  els.search.value = "";
  els.view.value = "all";

  persistState();
  renderResults(filterDestinations());
}

function handleCardClick(event) {
  const btn = event.target.closest("button[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === "favorite") {
    toggleFavorite(id);
    renderResults(filterDestinations());
  }
}

function init() {
  const regions = uniqueSorted(destinations.map(d => d.region));
  const types = uniqueSorted(destinations.map(d => d.type));

  populateSelect(els.region, regions);
  populateSelect(els.type, types);

  restoreState();
  renderResults(filterDestinations());

  els.region.addEventListener("change", handleControlsChange);
  els.type.addEventListener("change", handleControlsChange);
  els.view.addEventListener("change", handleControlsChange);
  els.search.addEventListener("input", handleControlsChange);
  els.reset.addEventListener("click", handleReset);

  els.cards.addEventListener("click", handleCardClick);
}

init();
