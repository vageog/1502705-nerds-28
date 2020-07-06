var contactButton = document.querySelector(".contact-us-button");
var contactWindow = document.querySelector(".contact-us-window");
var contactForm = document.querySelector(".contact-us-fields");
var contactClose = contactButton.querySelector(".close-button");
var contactName = document.querySelector(".contact-us-name");
var contactEmail = document.querySelector(".contact-us-email");
var contactText = document.querySelector(".contact-us-text");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactWindow.classList.add("modal-show");

    if (storage) {
        contactEmail.value = storage;
        contactEmail.focus();
    } else {
        contactName.focus()
    }
});

contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactWindow.classList.remove("modal-show");
});

contactForm.addEventListener("submit", function (evt) {
    if (!contactName.value && !contactEmail.value && !contactText.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", contactEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (contactWindow.classList.contains("modal-show")) {
            evt.preventDefault();
            contactWindow.classList.remove("modal-show");
        }
    }
});