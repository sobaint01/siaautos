// let x = 11
// let y = 25

// let total = x+y

// console.log(total)

let openHamburger = document.getElementById("hamburg")
let closeHamburger = document.getElementById("hamburgCloser")
let Menu = document.getElementById("dropMenu")

openHamburger.addEventListener("click", 
function() {
    closeHamburger.style.display = "flex";
    openHamburger.style.display = "none";
    Menu.style.display = "block";
    document.getElementsByClassName("primaryNav").style.marginTop = "auto";
    
        
})

closeHamburger.addEventListener("click", 
function() {
    openHamburger.style.display = "block";
    closeHamburger.style.display = "none"; 
    Menu.style.display = "none";
    // document.getElementsByClassName("primaryNav").style.marginTop = "auto";

})