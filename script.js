const WAITLIST_CONFIG = {
  googleFormActionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScLkIeFKK-TppLARdS9nLDDb-ay07XFTWQqp60nXmkQGz4qpA/formResponse",
  fields: {
    name: "entry.75267199",
    email: "entry.1007748118",
    company: "entry.1648427599",
    phone: "entry.1713214988",
    message: "entry.1956639885",
  },
  fallbackEmail: "diegoserrano@valtegara.com",
};

const modal = document.querySelector("[data-waitlist-modal]");
const openButtons = document.querySelectorAll("[data-open-waitlist]");
const closeButtons = document.querySelectorAll("[data-close-waitlist]");
const waitlistForm = document.querySelector("[data-waitlist-form]");
const statusMessage = document.querySelector("[data-form-status]");
let lastFocusedElement = null;

const isGoogleFormConfigured = () =>
  Boolean(WAITLIST_CONFIG.googleFormActionUrl) &&
  Object.values(WAITLIST_CONFIG.fields).every(Boolean);

const openModal = () => {
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector("input")?.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
};

const setStatus = (message) => {
  if (statusMessage) {
    statusMessage.textContent = message;
  }
};

const buildFallbackMailto = (form) => {
  const data = new FormData(form);
  const subject = encodeURIComponent("Lista de espera Temple");
  const body = encodeURIComponent(
    [
      "Hola Valtegara,",
      "",
      "Quiero unirme a la lista de espera de Temple.",
      "",
      `Nombre: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Funeraria/tanatorio: ${data.get("company") || ""}`,
      `Teléfono: ${data.get("phone") || ""}`,
      "",
      `Mensaje: ${data.get("message") || ""}`,
    ].join("\n"),
  );

  return `mailto:${WAITLIST_CONFIG.fallbackEmail}?subject=${subject}&body=${body}`;
};

openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (event) => {
    if (!isGoogleFormConfigured()) {
      event.preventDefault();
      setStatus("El formulario de Google aún no está conectado. Abrimos un email preparado.");
      window.location.href = buildFallbackMailto(waitlistForm);
      return;
    }

    waitlistForm.action = WAITLIST_CONFIG.googleFormActionUrl;

    waitlistForm.querySelectorAll("[data-google-field]").forEach((field) => {
      const key = field.dataset.googleField;
      field.name = WAITLIST_CONFIG.fields[key];
    });

    setStatus("Enviando...");
    window.setTimeout(() => {
      setStatus("Gracias. Hemos recibido sus datos.");
      waitlistForm.reset();
    }, 900);
  });
}
