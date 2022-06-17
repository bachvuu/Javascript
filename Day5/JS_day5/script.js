// const Linh = {
//   name: "Linh",
//   age: 27,
//   isBeauty: false,
//   gender: "Male",
//   address: {
//     city: "Hanoi",
//     district: "Bar Đình",
//     street: "Phạm Hùng",
//   },

//   hobbies: ["dog", "Joke"],

//   speak: function () {
//     console.log("Hello everyone");
//     console.log("Tớ là Linh");
//   },

//   eat: function () {
//     console.log("Ăn ngồm ngoàm");
//   },
// };
// //Dot Notation
// console.log(Linh.eat);

// //Bracket Notation
// console.log(Linh["name"]);
// console.log(["age"]);
// console.log(["a b c"]);

// //Ưu tiên dùng tên thuộc tính dạng CamelCase => truy cập thông qua cú pháp Notation

// let key = "name";
// Linh[key]; //Linh["name"] => "Linh"

const conChim = {
  color: "white",
  length: "10 mét",
  age: 25,
  sing: function () {
    console.log("Líu lo");
  },
  fly: function () {
    console.log("Nhanh ảo ma");
  },
};

function getValue(key) {
  return conChim[key];
}

console.log(getValue("color"));
console.log(getValue("length"));
console.log(getValue("age"));
conChim.sing();
conChim.fly();

for (const key in conChim) {
  console.log(`${key}: ${conChim[key]}`);
}

//-------------------------------------------------------

// const guess_List = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina",
// };

// function greeting(name) {
//   if (name in guess_List) {
//     console.log(`Hi, I'm ${name}, I'm from ${guess_List[name]}!`);
//   } else {
//     console.log("Hi, I'm a guess!");
//   }
// }

// greeting("Wendy");

//-------------------------------------------------------

// const family = {
//   Susan: 32,
//   Fred: 34,
// };

// function afterNYears(family, years) {
//   const family_old = {};

//   for (const name in family) {
//     family_old[name] = family[name] + years;
//   }
//   return family_old;
// }

// console.log(family);
// console.log(afterNYears(family, 10));

//-------------------------------------------------------

// const scores = {
//   A: 100,
//   B: 14,
//   C: 9,
//   D: 28,
//   E: 145,
//   F: 12,
//   G: 3,
//   H: 10,
//   I: 200,
//   J: 100,
//   K: 114,
//   L: 100,
//   M: 25,
//   N: 450,
//   O: 80,
//   P: 2,
//   Q: 12,
//   R: 400,
//   S: 113,
//   T: 405,
//   U: 11,
//   V: 10,
//   W: 10,
//   X: 3,
//   Y: 210,
//   Z: 23,
// };

// Viết hàm `calcNameScore(name)` nhận một giá trị đầu vào `name` là một tên bất kỳ (không dấu, viết hoa), tính điểm và in ra kết quả ứng với từng ký tự trong tên theo quy tắc như sau:

// - $score \le 60$: NOT TOO GOOD
// - $61 \le score \le 300$: PRETTY GOOD
// - $301 \le score \le 600$: VERY GOOD
// - $score \gt 600$: THE BEST

// function calcNameScore(name) {
//     total = 0;

//     for (letter of name) {
//         total += scores[letter];
//     }

//     if (total < 60) console.log("NOT TOO GOOD");
//     else if (total >= 61 && total < 300) console.log("PRETTY GOOD");
//     else if (total > 300 && total < 600) console.log("VERY GOOD");
//     else console.log("THE BEST");
// }

// calcNameScore("VUXUANBACH");

//-----------------------------------------------------------------------------------------------------

//this = là tham chiếu đến đối tượng thực hiện hành vi (đối tượng trước dấu chấm)

// let self = {
//     name: "Ba",
//     age: 31,

//     greeting() {
//         console.log(`Hello everyone. My name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// self.greeting();

// const clone = self;
// sefl = null;

// clone.greeting();

//-----------------------------------------------------------------------------------------------------

// const counter = {
//   value: 0,
//   up: function () {
//     this["value"]++;
//     return this;
//   },

//   down: function () {
//     this["value"]--;
//     return this;
//   },

//   get: function () {
//     console.log(this.value);
//     return this;
//   },
// };

// counter.up();
// counter.up();
// counter.up();
// counter.up();

// console.log(counter.get());

// counter.down();
// counter.down();

// console.log(counter.get());
