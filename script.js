// script.js
document.addEventListener("DOMContentLoaded", function() {
    function adjustFooter() {
        var footer = document.querySelector("footer");
        var content = document.querySelector(".character-card");
        var footerHeight = footer.offsetHeight;
        var contentHeight = content.offsetHeight;
        var windowHeight = window.innerHeight;

        if (contentHeight + footerHeight < windowHeight) {
            footer.style.position = "absolute";
            footer.style.bottom = "0";
            footer.style.width = "100%";
        } else {
            footer.style.position = "relative";
        }
    }

    adjustFooter();
    window.addEventListener("resize", adjustFooter);
});

function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
