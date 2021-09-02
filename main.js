const form = document.querySelector("form");
const input = document.querySelector("input")


const addNewTask = function (e) {
    e.preventDefault();
    const notCompleted = document.querySelector(".notCompleted");
    const completed = document.querySelector(".completed");
    const TitleTask = input.value;


    const newTask = document.createElement("li");
    newTask.className = "task";

    // Delete Task Button
    const delBtn = document.createElement("button");
    delBtn.className = "del";
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

    // Done Task Button
    const doneBtn = document.createElement("button");
    doneBtn.className = "done";
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'

    if (TitleTask) {
        // Add Task
        newTask.innerHTML = TitleTask;
        newTask.appendChild(delBtn);
        newTask.appendChild(doneBtn);
        notCompleted.appendChild(newTask)
        input.value = ""
    }
    // Delete Task
    delBtn.addEventListener("click", function () {
        this.parentNode.remove();
    })

    // Done Task
    doneBtn.addEventListener("click", function () {
        const parent = this.parentNode;
        this.parentNode.remove();
        completed.appendChild(parent);
        doneBtn.style.display = "none";
    })
}

form.addEventListener("submit", addNewTask);