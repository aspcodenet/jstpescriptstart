const wish = document.getElementById("wish");
const lightrope = document.getElementById("lightrope");
const hunden = document.getElementById("hunden");
const antal = document.getElementById("antal");
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");

const freight  = 200

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
    const inmatningen = wish === null || wish === void 0 ? void 0 : wish.value.toLowerCase();
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


