const img = document.getElementById('img');
const clicks = document.getElementById('clicks');
const am = document.getElementsByClassName('am')[0];
const amc = am.getElementById('amc')
const ami = am.getElementById('ami')

var cbx = 0;
var am$ = 100;
var cps = 0;

function amActivate() {
    cbx += cps;
};

img.addEventListener("click", function () {
    cbx += 1;
    clicks.textContent = "Carbux: " + cbx;
});

am.addEventListener("click", function () {
    price = 100;
    var yn = prompt('Are you sure? [y|n]')
    switch (yn) {
        case ('y'): {
            if (cbx >= am$) {
                cbx -= am$;
                cps += 0.5 * 1.5;
                Math.round(cps);
                am$ += 100 * .20;
                clicks.textContent = "Carbux: " + cbx;
                amc.textContent = 'Cost: ' + am$ + 'cbx';
                ami.textContent = cps + 'carbux per second'
            }
        }
        case ('n'): {
            return;
        }
    }
});

setInterval(amActivate(), 1000)

