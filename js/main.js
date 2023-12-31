//Import lớp đối tượng
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";


let todoList = new ToDoList();
let completeList = new ToDoList();
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

const showCompleteList = (ulCompleted) => {
    ulCompleted.innerHTML = completeList.renderToDo();
}
//Hàm delete todo
const deteleToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");
    if (status == "todo") {
        todoList.removeToDo(tdIndex);
        showToDoList(ulToDo);
    } else if (status == "completed") {
        completeList.removeToDo(tdIndex);
        showCompleteList(ulCompleted);
    } else {
        alert("Cannot delete todo!");
    }
}
window.deteleToDo = deteleToDo;


const completeToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");

    if (status == "todo") {
        let completedItem = todoList.tdList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(completedItem[0].textToDo, "completed");
        moveToDo(todoList, completeList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    } else if (status == "completed") {
        let undoItem = completeList.tdList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(undoItem[0].textToDo, "todo");
        moveToDo(completeList, todoList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    } else {
        alert("Cannot move todo!")
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    //Remove todo from depart
    depart.removeToDo(tdIndex);
    //Add todo  to arrival 
    arrival.addToDo(obj);
}