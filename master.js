document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".search-button").click();
    }
});
