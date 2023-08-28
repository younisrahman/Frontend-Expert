const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;
let after_id = null;
let canFetchTestimonials = true;
const testimonialContainer = document.getElementById("testimonial-container");

testimonialContainer.addEventListener("scroll", handleScroll);
fetchAndAppendTestimonials();

function handleScroll() {
  if (!canFetchTestimonials) return;
  const bottomSpaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;
  if (bottomSpaceLeftToScroll > 0) return;
  fetchAndAppendTestimonials();
}

async function fetchAndAppendTestimonials() {
  canFetchTestimonials = false;
  const url = createTestimonialsURL();
  const response = await fetch(url);
  const { testimonials, hasNext } = await response.json();

  const fragment = document.createDocumentFragment();
  testimonials.forEach(({ message }) => {
    fragment.appendChild(createTestimonialsElement(message));
  });
  testimonialContainer.appendChild(fragment);

  if (hasNext) {
    after_id = testimonials[testimonials.length - 1].id;
  } else {
    testimonialContainer.removeEventListener("scroll", handleScroll);
  }

  canFetchTestimonials = true;
}

function createTestimonialsElement(message) {
  const testimonialElement = document.createElement("p");
  testimonialElement.classList.add("testimonial");
  testimonialElement.textContent = message;
  return testimonialElement;
}

function createTestimonialsURL() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set("limit", PAGE_SIZE);
  if (after_id != null) {
    url.searchParams.set("after", after_id);
  }
  return url;
}
