const colors= ["green","red","rgba(133,122,200)","#f15025","#3a567b"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click" , function(){
    const randomNumber = getrandom();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getrandom(){
    return Math.floor (Math.random() * colors.length);
}