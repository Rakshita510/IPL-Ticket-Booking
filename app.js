
// Activity 5: JavaScript Basics and User Interaction

// 1. Create Toast Notification
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);

        toast.style.position = "fixed";
        toast.style.bottom = "25px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.background = "#061b49";
        toast.style.color = "white";
        toast.style.padding = "14px 25px";
        toast.style.borderRadius = "8px";
        toast.style.fontSize = "15px";
        toast.style.zIndex = "9999";
        toast.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
        toast.style.display = "none";
    }

    toast.textContent = message;
    toast.style.display = "block";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}


// 2. Smooth Scrolling and User Interaction
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for booking form links
    const scrollLinks = document.querySelectorAll('a[href="#bookingForm"]');

    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const bookingForm = document.getElementById("bookingForm");

            if (bookingForm) {
                event.preventDefault();

                bookingForm.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                showToast("Taking you to the booking form!");
            }
        });
    });


    // 3. Open Booking Form from Another Page
    if (window.location.hash === "#bookingForm") {

        const bookingForm = document.getElementById("bookingForm");

        if (bookingForm) {
            setTimeout(function () {

                bookingForm.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                showToast("Welcome! Please fill in your ticket details.");

            }, 300);
        }
    }


    // 4. Show Toast After Booking Form Submission
    const form = document.getElementById("bookingForm");

    if (form) {
        form.addEventListener("submit", function () {

            showToast("Your booking form has been submitted!");

        });
    }

});
