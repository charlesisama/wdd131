// scripts/contact.js

const CONTACT_KEYS = {
  count: "en_contact_count",
  last: "en_contact_last"
};

const c = {
  form: document.querySelector("#contactForm"),
  status: document.querySelector("#formStatus"),

  fullName: document.querySelector("#fullName"),
  email: document.querySelector("#email"),
  topic: document.querySelector("#topic"),
  region: document.querySelector("#region"),
  message: document.querySelector("#message"),
  consent: document.querySelector("#consent"),

  confirmation: document.querySelector("#confirmation"),
  confirmText: document.querySelector("#confirmText"),
  cTopic: document.querySelector("#cTopic"),
  cRegion: document.querySelector("#cRegion"),
  cCount: document.querySelector("#cCount"),
  cSaved: document.querySelector("#cSaved")
};

function getCount() {
  const raw = localStorage.getItem(CONTACT_KEYS.count);
  const num = Number(raw);
  return Number.isFinite(num) && num > 0 ? num : 0;
}

function setCount(value) {
  localStorage.setItem(CONTACT_KEYS.count, `${value}`);
}

function saveLastMessage(payload) {
  localStorage.setItem(CONTACT_KEYS.last, JSON.stringify(payload));
}

function readFormData() {
  return {
    name: `${c.fullName.value.trim()}`,
    email: `${c.email.value.trim()}`,
    topic: `${c.topic.value}`,
    region: `${c.region.value}`,
    message: `${c.message.value.trim()}`,
    consent: c.consent.checked,
    savedAt: `${new Date().toLocaleString()}`
  };
}

function validate(data) {
  const errors = [];

  if (data.name.length < 2) errors.push("Enter your full name.");
  if (!data.email.includes("@") || data.email.length < 6) errors.push("Enter a valid email.");
  if (data.topic === "") errors.push("Select a topic.");
  if (data.region === "") errors.push("Select a region.");
  if (data.message.length < 15) errors.push("Message must be at least 15 characters.");
  if (!data.consent) errors.push("Please confirm the consent checkbox.");

  return errors;
}

function showStatus(messages) {
  const text = messages.length === 0 ? "" : `${messages.join(" ")}`;
  c.status.textContent = `${text}`;
}

function showConfirmation(data, count) {
  c.confirmText.textContent = `${data.name}, thanks for reaching out. Your message has been saved locally for this project demo.`;
  c.cTopic.textContent = `${data.topic}`;
  c.cRegion.textContent = `${data.region}`;
  c.cCount.textContent = `${count}`;
  c.cSaved.textContent = `${data.savedAt}`;

  c.confirmation.hidden = false;
}

function clearForm() {
  c.form.reset();
}

function handleSubmit(event) {
  event.preventDefault();

  const data = readFormData();
  const errors = validate(data);

  if (errors.length > 0) {
    showStatus(errors);
    return;
  }

  showStatus([]);

  const newCount = getCount() + 1;
  setCount(newCount);
  saveLastMessage(data);

  showConfirmation(data, newCount);
  clearForm();
}

if (c.form) {
  c.form.addEventListener("submit", handleSubmit);
}

