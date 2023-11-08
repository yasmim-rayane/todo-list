const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("todo-list");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something.");
    } else {
        const li = document.createElement("li");
        li.className = "task-item"; // Adiciona a classe CSS ao elemento criado
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = '';
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrige o método "toogle" para "toggle"
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
