//Import lớp đối tượng
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";


let todoList = new ToDoList();
//Hàm rút gọn cú pháp 
const getELE = id => {
    return document.getElementById(id);
}

//Hàm thêm todo
const addToDo = () => {
    let txtTodo = getELE("newTask").value;
    let ulToDo = getELE("todo");
    if (txtTodo != "") {
        let td = new ToDo(txtTodo, "todo");
        todoList.addToDo(td);
    }
    //Gọi hàm
    showToDoList(ulToDo);
    getELE("newTask").value = "";
}

getELE("addItem").addEventListener("click", () => {
    addToDo();
})
//Hàm hiển thị todo
//Khai báo hàm
const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = todoList.renderToDo();
}