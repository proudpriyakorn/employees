document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!"); // Debugging

    // Handle file selection
    const fileInput = document.getElementById("file-input");
    const fileNameBox = document.getElementById("file-name");

    if (fileInput && fileNameBox) {
        fileInput.addEventListener("change", function () {
            fileNameBox.value = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
        });
    }

    // Profile dropdown logic
    const nameElement = document.querySelector(".sophia-name");
    const profileDropdown = document.getElementById("profileDropdown");
    const closeButton = document.querySelector(".profile-dropdown .close");

    if (nameElement && profileDropdown) {
        nameElement.addEventListener("click", function (event) {
            event.stopPropagation();
            profileDropdown.classList.toggle("show");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!profileDropdown.contains(event.target) && event.target !== nameElement) {
                profileDropdown.classList.remove("show");
            }
        });

        // Close dropdown when clicking the close button
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                profileDropdown.classList.remove("show");
            });
        }
    }

    // Popup success message logic
    const submitButton = document.querySelector(".submit-button");
    const successPopup = document.getElementById("successPopup");
    const closePopupButton = document.getElementById("closePopup");

    if (submitButton && successPopup) {
        submitButton.addEventListener("click", function () {
            successPopup.style.display = "block";
        });

        if (closePopupButton) {
            closePopupButton.addEventListener("click", function () {
                successPopup.style.display = "none";
            });
        }
    }
});
