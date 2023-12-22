"use strict";
const wish = document.getElementById("wish");
const lightrope = document.getElementById("lightrope");
const antal = document.getElementById("antal");
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");
const hunden = document.getElementById("hunden");
function onFocusWish() {
    lightrope.style.display = "block";
}
;
function onBlurWish() {
    lightrope.style.display = "none";
}
;
// number
function calculateTotalPrice(antal, price) {
    totalPrice.innerText = (antal + price).toString();
}
function onRecalculate() {
    calculateTotalPrice(parseInt(antal.value), parseInt(price.value));
}
wish.addEventListener("focus", onFocusWish);
wish.addEventListener("blur", onBlurWish);
wish.addEventListener("input", onInputWish);
price.addEventListener("input", onRecalculate);
antal.addEventListener("input", onRecalculate);
function onInputWish() {
    const inmatningen = wish.value.toLowerCase();
    if (inmatningen.includes("hund")) {
        hunden.style.display = "block";
    }
    else {
        hunden.style.display = "none";
    }
    console.log(inmatningen);
}
console.log("God");
