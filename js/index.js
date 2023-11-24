let x = 11
let y = 25

let total = x+y

console.log(total)

let openHamburger = document.getElementById("hamburg")
let closeHamburger = document.getElementById("hamburgCloser")

openHamburger.addEventListener("click", 
function() {
    closeHamburger.style.display = "flex";
    openHamburger.style.display = "none";
        
})

closeHamburger.addEventListener("click", 
function() {
    openHamburger.style.display = "flex";
    closeHamburger.style.display = "none";  
})