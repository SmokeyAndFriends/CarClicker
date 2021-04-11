const img = document.getElementById('img');
const clicks = document.getElementById('clicks');
const am = document.getElementsByClassName('am')[0];

var cbx = 0;

img.addEventListener("click", function() {
    cbx += 1;
    clicks.textContent = "Carbux: " + cbx;
});

am.addEventListener("click", function() {
    alert('Looks good')
});

