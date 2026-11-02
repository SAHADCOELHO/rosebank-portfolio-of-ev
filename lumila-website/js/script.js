// LUMILA website JavaScript - Part 3
document.addEventListener("DOMContentLoaded", function () {

    // Simple product search.
    var searchBox = document.getElementById("search-products");
    if (searchBox) {
        searchBox.addEventListener("input", function () {
            var searchText = searchBox.value.toLowerCase();
            var products = document.querySelectorAll(".product-card");
            var visibleCount = 0;

            products.forEach(function (product) {
                var productName = product.getAttribute("data-name").toLowerCase();
                if (productName.includes(searchText)) {
                    product.hidden = false;
                    visibleCount++;
                } else {
                    product.hidden = true;
                }
            });

            var message = document.getElementById("search-message");
            if (message) {
                message.textContent = visibleCount + " product(s) found.";
            }
        });
    }

    // Check enquiry form fields before showing a success-style message.
    var enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var name = document.getElementById("enquiry-name").value.trim();
            var email = document.getElementById("enquiry-email").value.trim();
            var product = document.getElementById("enquiry-product").value;
            var message = document.getElementById("enquiry-message").value.trim();
            var output = document.getElementById("enquiry-message-output");

            if (name.length < 2 || !email.includes("@") || product === "" || message.length < 10) {
                output.textContent = "Please complete all fields correctly. Your message must have at least 10 characters.";
                output.style.color = "darkred";
            } else {
                output.textContent = "The form looks correct. This demo does not send the enquiry.";
                output.style.color = "green";
            }
        });
    }

    // Check contact form.
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var name = document.getElementById("contact-name").value.trim();
            var email = document.getElementById("contact-email").value.trim();
            var message = document.getElementById("contact-message").value.trim();
            var output = document.getElementById("contact-message-output");

            if (name.length < 2 || !email.includes("@") || message.length < 10) {
                output.textContent = "Please enter your name, a valid email and a longer message.";
                output.style.color = "darkred";
            } else {
                output.textContent = "Your details look correct. This demo does not send an email.";
                output.style.color = "green";
            }
        });
    }

    // Open a simple image lightbox when a gallery image is clicked.
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    var closeButton = document.getElementById("close-lightbox");
    var galleryImages = document.querySelectorAll(".gallery-image");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            if (lightbox && lightboxImage) {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightbox.classList.add("open");
                lightbox.setAttribute("aria-hidden", "false");
            }
        });
    });

    if (closeButton && lightbox) {
        closeButton.addEventListener("click", function () {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.classList.remove("open");
                lightbox.setAttribute("aria-hidden", "true");
            }
        });
    }
});
