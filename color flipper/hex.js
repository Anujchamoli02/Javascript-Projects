const hex = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,"A", "B", "C", "D", "E", "F", ]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click" , function(){
    let hexColoor = "#";
    for(let i=0;i<6;i++){
        hexColoor += hex[getrandomNumber()]
    }
    color.textContent = hexColoor;
    document.body.style.backgroundColor = hexColoor;
})

function getrandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
console.log(getrandomNumber())