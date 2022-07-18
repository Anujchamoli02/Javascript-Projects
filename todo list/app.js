const todoInput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

todobutton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletecheck)

function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo = document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    const completedbutton = document.createElement("button");
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    completedbutton.innerHTML='<i class="fa-solid fa-check"></i>';

    const trashbutton = document.createElement("button");
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    trashbutton.innerHTML='<i class="fa-solid fa-trash"></i>';

    todolist.appendChild(todoDiv)
    todoInput.value="";
}

function deletecheck(e){
    const item = e.target;

    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}