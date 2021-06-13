const colors = ["green", "red", "rgba(133,122,200)", "#f15025","lightblue","rgba(145,129,67)","purple"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click",() => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(document.textContent);
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}