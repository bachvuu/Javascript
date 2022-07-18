// Arrow function khac biet 1 chut ve cu phap

function demo(params) {
  //code
  return 1;
}
let arrow = (params) => {
  //code
};

// Implicit return
let implicit = (params) => "value" | "expression";

//vi tri thuong dung arrow function. Thuong dung cho ham callback
let names = ["Hong Anh", "Bach", "Tung", "Linh"];

const upperName = names.map((name) => name.toUpperCase());

const nameLong5Chars = names.filter((name) => name.length >= 5);

const sum2Numbers = (a, b) => a + b;

//Rest parameters
const sum = (...numbers) => {
  let total = 0;
  for (const number of numbers) total += number;
  return total;
};

console.log(sum(1));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Dung dau 3 cham de nhet 1 mang vao function
let numbers = [10, 20, 30, 40];
console.log(sum(...numbers));

//Spread operator
const extend = [...numbers, 50, 60];

let obj = {
  name: "Ba",
  age: 30,
  job: "Teacher",
};

let arr = ["Tung", "Bach", "Linh"];

//Destructoring assignment - tu tach gia tri trong mang hoac obj va gan vao bien
const [v1, v2, v3] = arr;

//obj thi tu lay gia tri trong obj va gan cho cac key tuong ung
const { name, age, job } = obj;



products = [
  {
    id: 1,
    name: "product 1",
    price: 15,
  },
  {
    id: 2,
    name: "product 2",
    price: 5,
  }
];


const total = products.reduce((total, { price }) => (total += price), 0);





