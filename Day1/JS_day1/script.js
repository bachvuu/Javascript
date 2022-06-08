
// Data types

// number
let myAge = 24;
let negative = -100;
let float = 3.4;
let total = 200_000_000;

// string bọc trong dấu '' hoặc "" hoặc ``
let fullName = "Bách Vũ";
let className = "Web Front-end 26";


// Boolean
let isHandsome = true;
let isRich = false;

// Đại diện những biến chưa có value 
undefined;
// hoặc
let x;


// Đại diện cho biến không tồn tại
null;


// -----------------------------------------------------------------------------

// Tập hợp thông tin (giá trị) - mô tã đói tượn trong thực tế
let nhi = {
    name: "Nhi",
    age: 24,
    gender: "female",
    address: {
        no: "Số 5, Ngõ 20",
        street: "Lạc Long Quân",
        city: "Hà Nội",
        district: "Tây Hồ",
    },
    phone: "089876456",
    alcoholTolerance: "10 Lít",
    isSingle: false,
    isCute: false,
};


console.log(nhi);
console.log(nhi.phone);


// ---------------------------------------------


// Khai báo hàm
let hello2 = function (name) {
    console.log("Hàm xin chào");
    console.log("Chào ai?");
    console.log("Xin chào", name);
    console.log("Kết thúc hàm Hello");
}


// Gọi hàm (input_data)
hello2("Ba");
hello2("Bách");
hello2("Anh Sơn");

console.log(typeof (hello2));


Infinity // Vô cực - chia cho 0
-Infinity //âm vô cực
NaN; //Not a Number - Đại diện cho 1 phép tính sai "abc" / 1



// Exercises

// Bài 1
let sumTwoNumber = function (a, b) { 
    total = a + b;
    console.log(`${a} + ${b} = ${total}`);
}

sumTwoNumber(6, 5);


// Bài 2
let C_to_F = function () { 
    Cel = prompt("Nhập độ C");
    Fah = Cel * 1.8 + 32;
    console.log(`${Cel} độ C là ${Fah} độ F`);
}

C_to_F();


// Bài 3
let findArea = function (a, b){ 
    S = a * b;
    console.log(`Diện tích hình chữ nhật này là ${S} cm vuông!`);
}

findArea(5,9);