const wish = document.getElementById("wish") as HTMLInputElement;
const lightrope = document.getElementById("lightrope") as HTMLElement;
const antal = document.getElementById("antal") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const totalPrice = document.getElementById("totalPrice") as HTMLElement;
const hunden = document.getElementById("hunden") as HTMLElement;



function onFocusWish() {
    lightrope.style.display = "block";
};


function onBlurWish() {
    lightrope.style.display = "none";
};

// number
function calculateTotalPrice(antal:number, price:number){
    totalPrice.innerText = (antal + price).toString()
}

function onRecalculate(){
    calculateTotalPrice(parseInt(antal.value),parseInt(price.value))
}

wish.addEventListener("focus", onFocusWish);
wish.addEventListener("blur", onBlurWish);
wish.addEventListener("input", onInputWish);
price.addEventListener("input",onRecalculate)
antal.addEventListener("input",onRecalculate)


function onInputWish() {
    const inmatningen = wish.value.toLowerCase();
    if(inmatningen.includes("hund")){
        hunden.style.display = "block";
    }else {
        hunden.style.display = "none";
    }
    console.log(inmatningen)
}



console.log("God")