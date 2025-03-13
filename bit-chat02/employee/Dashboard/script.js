document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".sophia-name");
    const profileDropdown = document.getElementById("profileDropdown");
    const closeButton = document.querySelector(".profile-dropdown .close");

    nameElement.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing when clicking the name
        profileDropdown.classList.toggle("show");
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileDropdown.contains(event.target) && event.target !== nameElement) {
            profileDropdown.classList.remove("show");
        }
    });

    // Close button inside dropdown
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            profileDropdown.classList.remove("show");
        });
    }
});
