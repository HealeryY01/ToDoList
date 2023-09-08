export class ToDoList {
    constructor() {
        this.tdList = [];
    }
    addToDo(todo) {
        this.tdList.push(todo);
    }
    removeToDo(index) {
        this.tdList.splice(index, 1);
    }
    renderToDo() {
        let content = "";
        //Duyệt mảng từ phải qua trái (bắt đầu wor phần tử cuối cùng của mảng)
        content = this.tdList.reduceRight((tdContent, item, index) => {
            //tdContent = tdContent(nội dung cũ) + 'nội dung mới';
            tdContent += `
          <li>
          <span>${item.textToDo}</span>
           <div class="buttons">
           <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deteleToDo(event)"><i class="fa-solid fa-trash-can"></i></button>
           <button class="complete" data-index="${index}" data-status="${item.status}"onclick="completeToDo(event)">
           <i class="fa-solid fa-circle-check"></i>
           </button>
           </div>
          </li>
          `;
            return tdContent;
        }, "");
        return content;
    }
}
