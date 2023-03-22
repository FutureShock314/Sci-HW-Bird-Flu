document.getElementById("down-arrow").addEventListener("click", scrollDown);
let viewportHeight = window.innerHeight;

function scrollDown() {
    window.scrollTo(0, viewportHeight);
}