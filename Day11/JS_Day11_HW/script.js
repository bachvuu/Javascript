//Bài 1

// function randomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// function randomDirection() {
//   const dir = [
//     "to right",
//     "to top",
//     "to bottom",
//     "to top right",
//     "to bottom right",
//     "to top left",
//     "to bottom left",
//   ];

//   const randomIndex = Math.floor(Math.random() * dir.length);

//   return dir[randomIndex];
// }

// const button = document.querySelector(".btn-change");
// const property = document.querySelector(".property");

// button.addEventListener("click", function () {
//   console.log("lololo");
//   const color1 = randomColor();
//   const color2 = randomColor();

//   const direc = randomDirection();

//   document.body.style.backgroundImage = `linear-gradient(${direc}, ${color1}, ${color2})`;
//   document.property.textContent = `linear-gradient(${direc}, ${color1}, ${color2})`;
// });

// //Bài 2
// const form = document.forms.calculator;

// const billAmount = form.elements["bill-amount"];

// const guestNumber = form.elements["guest-number"];

// const quality = form.elements["quality"];

// const output = form.elements["result"];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const amount = billAmount.value;
//   const guests = guestNumber.value;
//   const service = quality.value;

//   const tipPerGuest = (amount * service) / guests;

//   output.innerHTML = `<b>${tipPerGuest}</b> each person`;
// });

//Bài 3
const form = document.forms.form;
const input = document.form.elements.task;
const list = document.querySelector(".todo-list");
const pending = document.querySelector(".pending");
const clear = document.querySelector(".clear");

const todos = [];

//id, content, status, isCompleted, label

function e(tagName, attributes, child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(child);
}

function createTask(task) {
  return (
    e("div", { className: "task" }, e("input"), { type: "check-box" }),
    e("div", { className: "task-content" }, task.content),
    e("div", { className: "btn-delete" }, "Xóa")
  );
}

function renderTask(task) {
  const div = createTask(task);
  list.prepend(div);
}

//submit form => thêm vào todo => hiển thị danh sách
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const content = input.value.trim();

  if (content == "") return;

  const newTask = {
    content,
    isCompleted: false,
    id: Math.floor(Math.random() * 1677215),
  };

  todos.push(newTask);

  input.value == "";

  renderTask(newTask);
});

//xóa 1 todo

//xóa hết

//báo cáo số lượng công việc

//Lưu lại công việc => cho phép khi load trang

//chức năng lọc
