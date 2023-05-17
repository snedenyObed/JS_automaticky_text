const nadpis = document.getElementById("text");
const zakladniRychlost = document.getElementById("speed");
const text = "Pokud toto čtete, věřte, že se jedná pouze o omáčku nutnou jako příklad k automatickému vypsání textu.";
let prvniPismeno = 1;
let zpozdeni = 500 / zakladniRychlost.value;

function vypisText() {
    nadpis.innerText = text.slice(0, prvniPismeno);

    // zvýší prvniPismeno vždy o 1
    prvniPismeno++;

    // vyresetuje zpět na 1 a text se začne vypisovat znovu
    if (prvniPismeno > text.length) {
        prvniPismeno = 1;
    }

    // spustí funkci vypisText se zpožděním zpozdeni
    setTimeout(vypisText, zpozdeni);
}
vypisText();

zakladniRychlost.addEventListener("input", function(event) {
    zpozdeni = 500 / event.target.value;
});