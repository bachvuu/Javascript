// // const arr = [1, 2, 3, 4, 5];

// // console.log(arr);

// // console.log(arr[2]);
// // console.log(arr["2"]);




// // adu = [[-10, 100], { name: "Bach", age: 24 }];

// // console.log(adu[0][1]);

// // console.log(adu[1].name);




// // // 2 cách in giá trị
// // //For
// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }


// // //For of
// // for (let value of arr) {
// //     console.log(value);
// // }



// // arr.reverse();

// // console.log(arr);

// // arr.sort();

// // console.log(arr);

// // console.log(arr.includes("Bach"));


// // //Tìm index của 1 value
// // console.log(arr.indexOf(2));

// // //Lấy ra 1 value cuối
// // console.log(arr.pop(5));

// // console.log(arr);

// // //Thêm value vào array
// // arr.push(5, 6, 7);
// // console.log(arr);


// // //Lấy ra 1 giá trị đầu
// // arr.shift();

// // //Xóa giá trị ở đầu
// // arr.unshift();

// // //Nối value array
// // console.log(arr.join());

// // console.log(arr.concat(adu));


// // console.log(arr.slice(2, 3));


// // //Dùng để xóa & chèn & thay thế
// // arr.splice(2, 1);
// // arr.splice(2, 0, 9, 10, 20, 45);







// // arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// // console.log(arr.length);

// // console.log(arr[0]);

// // console.log(arr[2]);

// // console.log(arr[arr.length - 1]);

// // console.log(arr[-1]);

// // // for (let value of arr) {
// // //     console.log(value);
// // // }

// // // for (let i = 0; i < arr.length; i++) {
// // //     console.log(i, arr[i]);
// // // }

// // for (let i = arr.length; i >= 0; i--) {
// //     console.log(i, arr[i]);
// // }


// // //Viết câu lệnh thêm "Ba" cuối mảng sử dụng phương thưc push()
// // arr.push("Ba");
// // console.log(arr);

// // //Viết câu lệnh thêm "Thảo" vào cuối mảng không sử dụng phương thức push()
// // arr[arr.length] = "Thảo";
// // console.log(arr);

// // //Viết câu lệnh thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
// // arr.unshift("Béo Ú");
// // console.log(arr);

// // //Viết câu lệnh xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop()
// // arr.pop();
// // console.log(arr);

// // //Viết câu lệnh xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift()
// // arr.shift();
// // console.log(arr);

// // //Viết câu lệnh sao chép 2 phần tử đầu tiên sử dụng phương thức slice()
// // let firstTwoElement = arr.slice(0, 2);
// // console.log(firstTwoElement);

// // //Viết câu lệnh sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
// // let arr2 = arr.slice();
// // console.log(arr2);

// // //Viết câu lệnh sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
// // let lastThree = arr.slice(-3);
// // console.log(lastThree);

// // //Viết câu lệnh xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng
// // arr.splice(1, 2);
// // console.log(arr);

// // //Viết câu lệnh thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3
// // arr.splice(1, 0, "Nhi", "Hùng");
// // console.log(arr);

// // // Viết câu lệnh để nối mảng ["Vinh", "Huy"] vào đầu mảng arr sử dụng phương thức
// // // concat(), chú ý mảng arr phải thay đổi sau khi nối
// // const arr3 = ["Vinh", "Huy"];
// // const arr4 = arr.concat(arr3);
// // console.log(arr4);

// // // Viết câu lệnh tìm và in ra chỉ mục của "Ba" ra console
// // console.log(arr.indexOf("Ba"));

// // // Viết câu lệnh tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
// // console.log(arr.indexOf("Thảo"));

// // // Viết câu lệnh kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức
// // // includes() và in ra kết quả
// // console.log(arr.includes("Mai Anh"));

// // // Viết câu lệnh in arr ra console dưới dạng chuỗi sử dụng phương thức toString()
// // console.log(arr.toString());

// // // Viết câu lệnh nối các tên trong mảng thành một chuỗi duy nhất dạng "Vinh-Huy-Linh-...-
// // // Hồng Anh-Bách" sử dụng phương thức join() và in ra console
// // console.log(arr.join("-"));

// // // Viết câu lệnh đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse()
// // console.log(arr.reverse());

// // // Viết câu lệnh đổi chỗ 2 phần tử đầu và cuối mảng
// // let trunggian = arr[0];

// // // Viết câu lệnh xóa toàn phần tử trong mảng
// // console.log(arr.length = 0);

// //Viết hàm max(arr) nhận vào một mảng các số, tìm và trả về số lớn nhất
// let arr = [1, 5, 3, 4, 2];

// function max(arr) {
//     let m = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > m) m = arr[i];
//     }
//     return m;
// }

// console.log(max(arr));


// //Viết hàm minMax(arr) nhận vào một mảng các số, tìm ra số nhỏ nhất và lớn nhất trong mảng,
// //sau đó trả về kết quả là một mảng mới chứa 2 giá trị [min, max]

// function minmax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log(max);
//     console.log(min);
// }

// minmax(arr);


// //Viết hàm avg(arr) nhận vào một mảng các số, tính trung bình cộng các số và trả về kết quả
// function avg(arr) {
//     total = 0;
//     for (i of arr) {
//         total += i;
//     }
//     let average = total / arr.length;
//     return average;
// }

// console.log(avg(arr));


// //Viết hàm swap(arr, x, y) nhận vào một mảng các số và 2 số x, y tương ứng với 2 chỉ mục
// // trong mảng, đổi chỗ vị trí 2 phần tử tương ứng, trả về kết quả là mảng arr đã thay đổi, lưu ý
// // mảng arr phải thay đổi sau khi gọi hàm swap()

// function swap(arr, x, y) {
//     arr[x] = arr.splice(y, 1, arr[x]);
//     return arr;
// }



// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];


// function mix(arr1, arr2) { 
//     let kq = [];
//     let length;
//     let rest;
    
//     if (arr1.length < arr2.length) { 
//         length = arr1.length;
//         rest = arr2.slice(length);
//     }

//     if (arr2.length < arr1.length) {
//         length = arr2.length;
//         rest = arr1.slice(length);
//     }


//     for (let i = 0; i < arr1.length; i++) { 
//         kq.push(arr1[i], arr2[i]);
//     }
//     return kq.concat(rest);
// }

