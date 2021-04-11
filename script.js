const img = document.getElementById('clicker');
const clicks = document.getElementById('clicks');

var cbx = 0;

img.addEventListener("click", function() {
    cbx += 1;
    clicks.textContent = "Carbux: " + cbx;
});