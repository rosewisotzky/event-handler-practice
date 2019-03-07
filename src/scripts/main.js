console.log("wow look at all the things you've learned pal! very rad")
let artLeft = document.querySelector("#artLeft");
let artRight = document.querySelector("#artRight");
let textField = document.querySelector("#textField");

textField.addEventListener("keyup", (event) => {
    // textField.event.target.value = artLeft.textContent;
    artRight.innerHTML = event.target.value;
    artLeft.innerHTML = event.target.value;
})