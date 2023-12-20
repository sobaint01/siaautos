let x = 11
let y = 25

let total = x+y

console.log(total)

let openHamburger = document.getElementById("hamburg")
let closeHamburger = document.getElementById("hamburgCloser")
let Menu = document.getElementById("dropMenu")

openHamburger.addEventListener("click", 
function() {
    closeHamburger.style.display = "flex";
    openHamburger.style.display = "none";
    Menu.style.display = "block";
    document.getElementById("pNav").style.marginTop = "auto";
    
        
})

closeHamburger.addEventListener("click", 
function() {
    openHamburger.style.display = "flex";
    closeHamburger.style.display = "none"; 
    Menu.style.display = "none";
    document.getElementById("pNav").style.marginTop = "0";

})