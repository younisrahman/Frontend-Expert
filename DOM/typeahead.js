const BASE_URL = "https://api.frontendexpert.io/api/fe/glossary-suggestions";

// Write your code here.

let timeoutID;
const input = document.getElementById("typeahead");
const suggestionsList = document.getElementById("suggestions-list");
input.addEventListener("input", onType);

function onType() {
  if (input.value.length === 0) {
    clearSuggestions();
    return;
  }
  clearTimeout(timeoutID);
  timeoutID = setTimeout(fetchAndAppendSuggestions, 500);
}

async function fetchAndAppendSuggestions() {
  const url = new URL(BASE_URL);
  url.searchParams.set("text", input.value);

  const response = await fetch(url);
  const suggestions = await response.json();

  const fragment = document.createDocumentFragment();
  suggestions.forEach((suggention) => {
    fragment.appendChild(createSuggestionsElement(suggention));
  });
  suggestionsList.replaceChildren(fragment);
}

function createSuggestionsElement(suggestion) {
  const suggestionElement = document.createElement("li");
  suggestionElement.textContent = suggestion;
  suggestionElement.addEventListener("click", () => {
    input.value = suggestion;
    clearSuggestions();
  });
  return suggestionElement;
}

function clearSuggestions() {
  clearTimeout(timeoutID);

  suggestionsList.innerHTML = "";
}
