const colors = ["green", "red", "rgba(133,122,200)", "#e3c526"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    // set background color to the chosen random color
    document.body.style.backgroundColor = colors[randomNumber];
    // display the chosen random color's name on screen
    color.textContent = colors[randomNumber];
});

// create random number according to an array's length
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}