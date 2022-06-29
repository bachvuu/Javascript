// // script.js
// const fruitList = [
//   "apple",
//   "banana",
//   "tomato",
//   "watermelon",
//   "strawberry",
//   "cherry",
//   "coconut",
// ];

// const todos = [
//   {
//     id: 1,
//     completed: true,
//     content: "Learning HTML",
//   },
//   {
//     id: 2,
//     completed: true,
//     content: "Learning CSS",
//   },
//   {
//     id: 3,
//     completed: false,
//     content: "Learning JavaScript",
//   },
// ];

// function e(tagName, attributes, child) {
//   const tag = document.createElement(tagName);
//   Object.assign(tag, attributes);
//   tag.append(child);
//   return tag;
// }

// function createFruitList(fruits) {
//   const list = e("ul", { className: "fruit-list" });

//   for (let fruit of fruits) {
//     let item = e("li", { className: "fruit" }, fruit);

//     list.append(item);
//   }

//   return list;
// }

// const app = document.getElementById("app");
// app.append(createFruitList(fruitList));

// function createToDoList(todos) {
//   const list = e("ul", { className: "to-do-list" });

//   for (let task of todos) {
//     let item;
//     if (task.completed) {
//       item = e("li", { className: "completed" }, task.content);
//     } else {
//       item = e(
//         "li",
//         { className: "incompleted" },
//         task.content,
//         e("button", { className: "btn-done" }),
//         "Done"
//       );

//       list.append(item);
//     }
//     return list;
//   }
// }

// const app = document.getElementById("app");
// app.append(createToDoList(todos));




