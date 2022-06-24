//Callback
//first class function

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   console.log(result);
// }

// //callback cách thủ công
// for (let value of arr) {
//   factorial(value);
// }

//cách nhanh
// arr.forEach(factorial);

// Nhận tối đa 3 giá trị: value, index, array
// arr.forEach(function (value) {
//     console.log(value * value);
// })

//HÀM find()
// Tìm ra thằng đầu tiên chia hết cho 2 trong mảng

// function divi2(n) {
//     return n % 2 == 0;
// }

// for (value of arr) {
//     if (value % 2 == 0) console.log(value);
//     break;
// }

// arr.find(function (value) {
//     return value % 2 === 0;
// })

// const arr = [0, 1, 2, 3, 4, 5, 6];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         result.push(i);
//     }
// }

// console.log(result);

// // tìm tất cả các giá trị thành mảng mới
// arr.filter(function (value) {
//     return value % 2 == 0;
// })

// arr.filter(Boolean);

//Tạo mảng tương tự nhưng các gí trị bằng bình phương của chính nó
// let result = arr.map(function (value) {
//     return value ** 2;
// });

// console.log(result);

// arr.reduce(function (value, sum) {
//     return sum;
// }, 0);

// const arr2 = ["Ba", "Tùng", "Linh", "Nhi", "Bách", "Anh"];
// const arr3 = [1, 2, 3, 4, 5, 22, 24];

// //Sắp xếp theo chữ cái đầu
// arr2.sort();
// console.log(arr2);

// //Đổi số sang dạng chuỗi và sắp xếp theo chữ đầu
// arr3.sort();
// console.log(arr3);

// Với object thì kết quả trả ra như nhau giữ nguyên vị trí
// arr4 = [
//     { name: "iPhone", price: 1000 },
//     { name: "Macbook", price: 999 },
//     { name: "Samsung", price: 1200 }
// ];

// arr4.sort(function (a, b) {
//     return a.price - b.price; //Đảo ngược b - a để đảo chiều sắp xếp
// });

// console.log(arr4);

// //cách 1 dài
// arr3.sort(function (a, b) {
//     if (a >= b) return 1;
//     else return -1;
// })

// console.log(arr3);

// //cách 2 ngắn
// arr3.sort(function (a, b) {
//     return a - b;
//     //Nếu a lớn hơn b kết quả dương => đổi chỗ
//     //Nếu a nhỏ hơn b kết quả âm => giữ nguyên vị trí
// })


//Exercise 1
// const arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     let result = arr.filter(function (value) {
//         return a <= value && b >= value
//     });
//     return result;
// };

// console.log(filterRange(arr, 1, 4));


//Exercise 2
// const users = [
//     {name: "John", age: 33 },
//     {name: "Pete", age: 25},
//     {name: "Mary", age: 34}
// ];


// function getNames(users) {
//     return users.map(function (user) {
//         return user.name;
//      });
//     };

// console.log(getNames(users));



