const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // create a variable and give it an initial value '#'
    let hexColor = '#';
    // use for loop to add 6 additional random items from 'hex(array)' into hexColor
    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomColor()];
    }
    // set background color to the chosen random color
    document.body.style.backgroundColor = hexColor;
    // display the chosen random color's name on screen
    color.textContent = hexColor;
});

// create random number according to an array's length
function getRandomColor(){
    return Math.floor(Math.random() * hex.length);
}