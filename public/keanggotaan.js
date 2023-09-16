document.addEventListener("DOMContentLoaded", function () {
    // Function to show photos of the selected category
    function showPhotos(category) {
        const photos = document.querySelectorAll(".img-container");
        photos.forEach(function (photo) {
            if (photo.dataset.category === category || category === "All") {
                photo.style.display = "block";
            } else {
                photo.style.display = "none";
            }
        });
    }

    // Add click event listeners to list items
    const listItems = document.querySelectorAll(".list-divisi ul li");
    listItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedCategory = item.dataset.category; // Use the 'data-category' attribute value
            showPhotos(selectedCategory);
        });
    });
});
