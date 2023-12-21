// EXERCISES i TS
// - Fixa alla document.getElementById - hint as HTMLElement, HTMLInputElement
// - skapa en konstant variabel freight som  har värdet 200
//          ska adderas i calculate
// - Fixa funktionen calculateTotalPrice så den tar parametertyper och returntyp

// - Skapa en klass HockeyPlayer. Den ska ha id, name, jerseyNumber, teamName
// - Skapa en array med players
// - loopa igenom alla och gör consolog.log



const wish = document.getElementById("wish");
const lightrope = document.getElementById("lightrope");
const hunden = document.getElementById("hunden");
const antal = document.getElementById("antal");
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");

function calculateTotalPrice(antal, price){
    totalPrice.innerText = antal + price
}


function onRecalculate(){
    calculateTotalPrice(antal.value,price.value)
}


function onFocusWish() {
    lightrope.style.display = "block";
};
function onBlurWish() {
    lightrope.style.display = "none";
};
function onInputWish() {
    const inmatningen = wish.value.toLowerCase();
    if (inmatningen.includes("hund")) {
        hunden.style.display = "block";
    }
    else {
        hunden.style.display = "none";
    }
};
wish.addEventListener("focus", onFocusWish);
wish.addEventListener("blur", onBlurWish);
wish.addEventListener("input", onInputWish);
price.addEventListener("input",onRecalculate)
antal.addEventListener("input",onRecalculate)


