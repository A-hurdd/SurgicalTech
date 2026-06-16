const state = {
  instruments: [],
  query: "",
  category: "all",
  difficulty: "all",
  learned: "all",
  quizItem: null,
};

const elements = {
  cards: document.querySelector("#cards"),
  template: document.querySelector("#cardTemplate"),
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  difficulty: document.querySelector("#difficultyFilter"),
  learned: document.querySelector("#learnedFilter"),
  reset: document.querySelector("#resetFilters"),
  totalCount: document.querySelector("#totalCount"),
  learnedCount: document.querySelector("#learnedCount"),
  visibleCount: document.querySelector("#visibleCount"),
  empty: document.querySelector("#emptyState"),
  themeToggle: document.querySelector("#themeToggle"),
  quizMode: document.querySelector("#quizMode"),
  quizPanel: document.querySelector("#quizPanel"),
  quizPrompt: document.querySelector("#quizPrompt"),
  quizClue: document.querySelector("#quizClue"),
  quizCard: document.querySelector("#quizCard"),
  quizOptions: document.querySelector("#quizOptions"),
  quizFeedback: document.querySelector("#quizFeedback"),
  nextQuestion: document.querySelector("#nextQuestion"),
  exitQuiz: document.querySelector("#exitQuiz"),
};

const learnedStorageKey = "surgical-instrument-learned";

async function init() {
  const response = await fetch("instruments.json");
  state.instruments = await response.json();
  applyStoredLearned();
  populateFilters();
  bindEvents();
  render();
}

function bindEvents() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value.toLowerCase().trim();
    render();
  });
  elements.category.addEventListener("change", (event) => {
    state.category = event.target.value;
    render();
  });
  elements.difficulty.addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    render();
  });
  elements.learned.addEventListener("change", (event) => {
    state.learned = event.target.value;
    render();
  });
  elements.reset.addEventListener("click", resetFilters);
  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.quizMode.addEventListener("click", startQuiz);
  elements.nextQuestion.addEventListener("click", nextQuestion);
  elements.exitQuiz.addEventListener("click", () => elements.quizPanel.classList.add("hidden"));
}

function populateFilters() {
  addOptions(elements.category, uniqueValues("category"));
  addOptions(elements.difficulty, uniqueValues("difficulty"));
}

function addOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function uniqueValues(field) {
  return [...new Set(state.instruments.map((item) => item[field]).filter(Boolean))].sort();
}

function getFilteredInstruments() {
  return state.instruments.filter((item) => {
    const searchableText = Object.values(item).join(" ").toLowerCase();
    const matchesQuery = !state.query || searchableText.includes(state.query);
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesDifficulty = state.difficulty === "all" || item.difficulty === state.difficulty;
    const matchesLearned = state.learned === "all" || (state.learned === "learned" ? item.learned : !item.learned);
    return matchesQuery && matchesCategory && matchesDifficulty && matchesLearned;
  });
}

function render() {
  const filtered = getFilteredInstruments();
  elements.cards.replaceChildren(...filtered.map(createCard));
  elements.empty.classList.toggle("hidden", filtered.length > 0);
  elements.totalCount.textContent = state.instruments.length;
  elements.learnedCount.textContent = state.instruments.filter((item) => item.learned).length;
  elements.visibleCount.textContent = filtered.length;
}

function createCard(item) {
  const card = elements.template.content.firstElementChild.cloneNode(true);
  const imageSlot = card.querySelector(".image-slot");
  const learnedButton = card.querySelector(".learned-btn");

  if (item.image_url) {
    const image = document.createElement("img");
    image.src = item.image_url;
    image.alt = item.name;
    imageSlot.append(image);
  } else {
    imageSlot.textContent = item.name.slice(0, 1);
  }

  card.querySelector(".category").textContent = item.category;
  card.querySelector("h2").textContent = item.name;
  card.querySelector(".subcategory").textContent = item.subcategory;
  card.querySelector(".use").textContent = item.used_for;
  card.querySelector(".tags").replaceChildren(...buildTags(item));
  card.querySelector(".details").replaceChildren(...buildDetails(item));
  card.querySelector(".notes").textContent = item.notes ? `Notes: ${item.notes}` : "";

  learnedButton.textContent = item.learned ? "Learned" : "Mark learned";
  learnedButton.setAttribute("aria-pressed", String(item.learned));
  learnedButton.addEventListener("click", () => toggleLearned(item.id));
  return card;
}

function buildTags(item) {
  return [item.difficulty, item.subcategory, ...splitList(item.common_procedures)].filter(Boolean).map((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    return span;
  });
}

function buildDetails(item) {
  const fields = [
    ["Recognize", item.recognize_by],
    ["Procedures", item.common_procedures],
    ["Similar", item.similar_to],
    ["Avoid", item.do_not_confuse_with],
  ];
  return fields.flatMap(([label, value]) => {
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value || "—";
    return [term, description];
  });
}

function splitList(value) {
  return value ? value.split(";").map((item) => item.trim()) : [];
}

function toggleLearned(id) {
  const item = state.instruments.find((instrument) => instrument.id === id);
  item.learned = !item.learned;
  localStorage.setItem(learnedStorageKey, JSON.stringify(state.instruments.filter((instrument) => instrument.learned).map((instrument) => instrument.id)));
  render();
}

function applyStoredLearned() {
  const learnedIds = JSON.parse(localStorage.getItem(learnedStorageKey) || "[]");
  state.instruments.forEach((item) => {
    item.learned = learnedIds.includes(item.id) || item.learned;
  });
}

function resetFilters() {
  state.query = "";
  state.category = "all";
  state.difficulty = "all";
  state.learned = "all";
  elements.search.value = "";
  elements.category.value = "all";
  elements.difficulty.value = "all";
  elements.learned.value = "all";
  render();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  elements.themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
}

function startQuiz() {
  elements.quizPanel.classList.remove("hidden");
  nextQuestion();
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextQuestion() {
  const source = getFilteredInstruments().length ? getFilteredInstruments() : state.instruments;
  state.quizItem = source[Math.floor(Math.random() * source.length)];
  const options = shuffle([state.quizItem, ...shuffle(state.instruments.filter((item) => item.id !== state.quizItem.id)).slice(0, 3)]);
  elements.quizPrompt.textContent = "Which instrument matches this clue?";
  elements.quizClue.textContent = `${state.quizItem.used_for} Recognize by: ${state.quizItem.recognize_by}.`;
  elements.quizCard.innerHTML = `<strong>Category:</strong> ${state.quizItem.category}<br><strong>Difficulty:</strong> ${state.quizItem.difficulty}`;
  elements.quizFeedback.textContent = "";
  elements.quizOptions.replaceChildren(...options.map(createOption));
}

function createOption(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = item.name;
  button.addEventListener("click", () => {
    const correct = item.id === state.quizItem.id;
    elements.quizFeedback.textContent = correct ? "Correct — nice work." : `Not quite. The answer is ${state.quizItem.name}.`;
    elements.quizFeedback.style.color = correct ? "var(--accent-strong)" : "#c2410c";
  });
  return button;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

init().catch((error) => {
  elements.cards.innerHTML = `<p class="empty">Unable to load instruments.json: ${error.message}</p>`;
});
