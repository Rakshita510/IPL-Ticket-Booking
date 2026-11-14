
// Activity 5: JavaScript Basics and User Interaction

// 1. Create Toast Notification
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);

        // Toast design - Centre of the screen
        toast.style.position = "fixed";
        toast.style.top = "50%";
        toast.style.left = "50%";
        toast.style.transform = "translate(-50%, -50%)";

        toast.style.background = "#061b49";
        toast.style.color = "white";
        toast.style.padding = "30px 45px";
        toast.style.borderRadius = "15px";

        toast.style.fontSize = "28px";
        toast.style.fontWeight = "bold";
        toast.style.textAlign = "center";

        toast.style.width = "auto";
        toast.style.maxWidth = "85%";

        toast.style.zIndex = "9999";
        toast.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
        toast.style.display = "none";
    }

    // Display message
    toast.textContent = message;
    toast.style.display = "block";

    // Hide previous timer
    clearTimeout(window.toastTimer);

    // Hide toast after 3 seconds
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


    // 3. Welcome Toast when opening booking form page
    if (window.location.hash === "#bookingForm") {

        const bookingForm = document.getElementById("bookingForm");

        if (bookingForm) {
            setTimeout(function () {

                bookingForm.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                showToast("WELCOME! PLEASE BOOK YOUR IPL TICKETS!");

            }, 300);
        }
    }


    // 4. Toast after booking form submission
    const form = document.getElementById("bookingForm");

    if (form) {
        form.addEventListener("submit", function () {

            showToast("Your booking form has been submitted!");

        });
    }

});
