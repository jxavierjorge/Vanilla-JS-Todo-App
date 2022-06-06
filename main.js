console.log("Hello World");

const taskInputNode = document.getElementById("taskInputNode");
const tasklistNode = document.getElementById("tasklistNode");
const addButtonNode = document.getElementById("addButtonNode");

addButtonNode.addEventListener("click", () => {
  const divNode = document.createElement("div");

  let taskValue = document.createElement("li");

  let deleteBtn = document.createElement("button");
  let tickBtn = document.createElement("input");

  tickBtn.type = "checkbox";

  deleteBtn.id = "deleteBtn";

  taskValue.textContent = taskInputNode.value;
  deleteBtn.innerHTML = "x";
  divNode.appendChild(tickBtn);
  divNode.appendChild(taskValue);
  divNode.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target;
    if (item.id === "deleteBtn") {
      item.parentElement.remove();
    }
  });

  tickBtn.addEventListener("click", (e) => {
    const item = e.target;
    if (item.checked) {
      let parent = item.parentElement;
      parent.querySelectorAll("li")[0].classList.add("done");
    } else {
      let parent = item.parentElement;
      parent.querySelectorAll("li")[0].classList.remove("done");
    }
  });

  tasklistNode.appendChild(divNode);
});
