// let count = 0 
// const no = document.querySelector(".no")
// const btns = document.querySelectorAll(".btn")

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const style=e.currentTarget.classList
//         if(style.contains("minus")){
//             count--
//             no.textContent = count
//         }
//         if(style.contains("add")){
//             count++
//             no.textContent = count
//         }
//         if(style.contains("reset")){
//             count=0
//             no.textContent = count
//         }

//     })
// })
let count=0
const add = document.querySelector(".add")
const reset = document.querySelector(".reset")
const minus = document.querySelector(".minus")
const no = document.querySelector(".no")

add.addEventListener("click" , function(){
    count++
    if(count > 0){
        no.style.color = "green"
    }
    no.textContent=count
})
minus.addEventListener("click" , function(){
    count--
    if(count < 0 ){
        no.style.color = "red"
    }
    no.textContent=count
})
reset.addEventListener("click" , function(){
    count=0
    if(count == 0 ){
        no.style.color = "black"
    }
    no.textContent=count
})