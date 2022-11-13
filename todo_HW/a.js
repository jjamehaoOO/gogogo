let todolist = [
    {id: 1,
    content:"Do laundry",
    completed:false},
    {id: 2,
     content:"Buy dinner",
     completed:false},
    {id: 3,
    content:"Do exercise",
    completed:true}
]

let activatedFilter = document.querySelector(".filter.all");

let middle = document.querySelector(".middle");

// render
function rerender(){
  middle.innerHTML = "";
  const filter = activatedFilter.innerText;
  // innerText可以控制裡面的字
  todolist.filter((t) => {
      if (filter === "Active") return !t.completed;
      if (filter === "Completed") return t.completed;
      return t;
    }).forEach((t) => {
      let todoElement = document.createElement("div");
        todoElement.classList.add("todo"); 

        if(t.completed){
            todoElement.classList.add("todo-completed");
        }
        todoElement.setAttribute("data-todo_id",t.id);

            todoElement.innerHTML = `        
            <div class="title">${t.content}</div>
            <div class="button status complete"></div>
            <div class="button status delete"></div>   
            `
            
      middle.appendChild(todoElement);




    })
    

    // for(let i = 0;i<todolist.length;i++){
    //     let todoElement = document.createElement("div");
    //     todoElement.classList.add("todo"); 

    //     if(todolist[i].completed){
    //         todoElement.classList.add("todo-completed");
    //     }
    //     todoElement.setAttribute("data-todo_id",todolist[i].id);

    //         todoElement.innerHTML = `        
    //         <div class="title">${todolist[i].content}</div>
    //         <div class="button status complete"></div>
    //         <div class="button status delete"></div>   
    //         `
            
    //   middle.appendChild(todoElement);
    // }
}
rerender();

//add 
//  輸入完在input上的值 按下add的按鈕之後 input上的值顯示在下面

const addBtn = document.querySelector(".add");
// console.log(addBtn);
const form = document.querySelector("form");
const input = document.querySelector("input.todo-input");
// console.log(input);

// addBtn.addEventListener("click",checkInputvalue);
addBtn.addEventListener("click",addlistBtn);
// function checkInputvalue(e){
//   input.value = e.target.value;
//   if(input.value === ''){
//     alert("請輸入值");
//   }
// }
function addlistBtn(e){
    e.preventDefault();
     if(input.value === ''){
      return alert("請輸入值");
     }
     if(input.value.length > 15){
      return alert("不能超過15個字");
     }
    todolist.push({
        id:todolist.length + 1 ,
        content:input.value,
        completed:false}
    ); 
    rerender();
    
}
  
//打勾
  
  const complete = document.querySelector(".complete");

  middle.addEventListener("click",tick);

  function tick(e){
    if(!e.target.classList.contains("complete")) return;
    const todo = e.target.closest(".todo");
    const todoId = todo.getAttribute("data-todo_id")
    const target = todolist.find((t => t.id === Number(todoId)));
    target.completed = !target.completed;
    rerender();
  }

//delete

middle.addEventListener("click",handleDelete);

function handleDelete(e){    
    if(!e.target.classList.contains("delete")) return;

    const todo = e.target.closest(".todo");
    const todoId = todo.getAttribute("data-todo_id");
    todolist = todolist.filter((t) => t.id !== Number(todoId));
    // target.completed = !target.completed;
    rerender();
}

middle.addEventListener("click", handleDelete);
function handleDelete(e) {
  if (!e.target.classList.contains("delete")) return;

  const todo = e.target.closest(".todo");
  const todoId = todo.getAttribute("data-todo_id");
  todolist = todolist.filter((t) => t.id !== Number(todoId));
  //todolist拿到id不等於數值的

  rerender();

  }

  //filter
const bottom = document.querySelector(".bottom");
// console.log(bottom);
bottom.addEventListener("click", handleFilter);

function handleFilter(e) {
  if (!e.target.classList.contains("filter")) return;
  
  activatedFilter = e.target;
  rerender();
}
