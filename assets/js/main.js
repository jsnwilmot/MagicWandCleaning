const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

const closeMenu = () => {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 10);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const quoteForm = document.querySelector("[data-quote-form]");
if (quoteForm) {
  const status = quoteForm.querySelector(".form-status");
  const requiredFields = [...quoteForm.querySelectorAll("[required]")];

  const validateField = (field) => {
    const error = document.getElementById(`${field.id}-error`);
    if (!error) return field.checkValidity();
    let message = "";
    if (field.validity.valueMissing) message = "Please complete this field.";
    else if (field.validity.typeMismatch) message = "Please enter a valid email address.";
    else if (field.validity.patternMismatch) message = "Please enter a valid phone number.";
    field.setAttribute("aria-invalid", String(Boolean(message)));
    error.textContent = message;
    return !message;
  };

  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const contactMethods = [...quoteForm.querySelectorAll('input[name="contact-method"]')];
    const contactMethodError = document.getElementById("contact-method-error");
    const hasContactMethod = contactMethods.some((field) => field.checked);
    if (contactMethodError) contactMethodError.textContent = hasContactMethod ? "" : "Please choose a preferred contact method.";
    const isValid = requiredFields.filter((field) => field.type !== "radio").map(validateField).every(Boolean) && hasContactMethod;
    status.className = `form-status ${isValid ? "is-success" : "is-error"}`;
    status.textContent = isValid
      ? "Your request is ready to send. Online form delivery is not connected yet, so please call or message Magic Wand Cleaning on Facebook."
      : "Please review the highlighted fields before continuing.";
    if (!isValid) (quoteForm.querySelector('[aria-invalid="true"]') || contactMethods[0])?.focus();
    status.focus();
  });
}
