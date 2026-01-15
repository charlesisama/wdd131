const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

// btn.addEventListener("click", () => {
//     const rndColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndColor;
// })

function changeBackColor (e){
     
    const rndColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndColor;
    console.log(e);
}

btn.addEventListener("click", changeBackColor);

const textBox = document.querySelector("#textBox");

const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = (`You pressed "${event.key}".`);
    
});

const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");

const para = document.querySelector("p ");

form.addEventListener("submit", (e) => {
    if (fname.value == "" || lname.value== ""){
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    }
});

