# Variable
Biến là tên 1 vùng bộ nhớ lưu trữ dữ liệu trong RAM máy tính 

## Loại variables:
### 1. let - không thể khai báo lại nhưng có thể thay đổi value

### 2. const không thể khai báo lại & giá trị không thể thay đổi

## Cách khai báo:

let myName = "Bách Vũ";
let myCu = "25cm";

const MY_LOVE = "Ngọc Trinh";

## Quy tắc đặt tên biến:

### Với biến let
- Tên biến chỉ được chứa ký tự, số, hoặc ký tự đặc biệt $ và _
- Tên biến không được bắt đầu bằng một số
- Tên biến có phân biệt chữ hoa, chữ thường
- Tên biến không được trùng với từ khóa của JavaScript

### Với biến const
- JavaScript sử dụng phong cách camelCase cho tên biến, hoặc hàm (vd: let myName)
- Với hằng số - const - sử dụng UPPERCASE (vd: const 
BIRTH_DAY)

# Data types

## 9 kiểu dữ liệu trong Javascript:
### Primitives
1. number
2. bigint
3. string
4. boolean
5. undefined
6. null
7. symbol

### Reference
8. object
9. function
10. array

## Cách kiểm tra data type
- Sử dụng typeof

vd: typeof(1);
//resulst => number

# Numbers 
- Lọai số bao gồm số nguyên, giới hạn -2^53 + 1 đến 2^53 - 1

vd: 
let integer = 1; (số nguyên)
let float = 1.5; (số thập phân)

Trường hợp đặc biệt:
Infinity: 1/0
-Infinity: -1/0

NaN (viết tắt Not a Number)


# Strings
- Là một chuỗi ký tự được đặt trong cặp dấu ‘ ’ hoặc “ ”

vd:
let firstName = "Bách";
let lastName = "Vũ";

Nối chuỗi
vd:
let message = "Hello, " + firstName + " " + lastName;
console.log(message);

result => Hello, Bách Vũ 

# Boolean, Null, Undefined
- Chỉ bao gồm hai giá trị true hoặc false

- null và undefined là 2 giá trị đặc biệt, null đại diện cho một đối tượng không tồn tại, còn undefined
đại diện cho một đối tượng chưa được gán giá trị.

- Khi khai báo 1 biến mà không gán giá trị, mặc định biến sẽ có giá trị undefined


# Object
- Kiểu dữ liệu đặc biệt cho phép lưu trữ nhiều cặp key - value trong 1 biến duy nhất. Các gía trị có thể thuộc bất kỳ kiểu nào

## Cách khai báo

let Bach{
    fullName : "Vũ Xuân Bách",
    phone: "039889843",
    address: "Tây Hồ, Hà Nội"
};

## Cách truy cập

Bach.fullName; - kiểu trần

Bach["fullName"] - kiểu đóng hộp
  
result => Vũ Xuân Bách

# Function
- function là cách thức tổ chức mã cơ bản trong JavaScript, function được sử dụng để đóng gói một
đoạn mã để xử lý một công việc/tính toán giá trị nào đó, cho phép tái sử dụng đoạn mã ở nhiều nơi
trong chương trình

## Cách khai báo
function Hello(){
    name = prompt("Tên bạn là gì? ");
    console.log (name);
} 

### Cách chạy hàm
Hello();

# Local vs. Global Variables

- Biến khai báo trong hàm gọi là biến lô cồ - chỉ tồn tại trong hàm đó

- Biến khai báo bên ngoài tất cả function được gọi là gờ lâu bồ có thể dùng ở mọi nơi

- Nên tránh truy cập trực tiếp tới giá trị 1 biến bên ngoài hàm, thay vào đó nên sử dụng parameters và arguements

# 2 Types of Function

### 1. Thực thi một công việc (tác vụ) nào đó, không quan tâm kết quả
### 2. Tính toán một giá trị và trả về kết quả

- Mặc định, mọi hàm luôn trả về một giá trị sau mỗi câu lệnh gọi hàm là undefined. 
- Để chỉ định một giá
trị cụ thể là kết quả trả về của hàm, sử dụng câu lệnh return


vd:

function Hello(){
    name = "Hihi";
    return name;
}

Hello();
result => Hihi

vd2:

function sum(a, b){
    return a + b;
}

console.log(sum(1,2));
result => 3;

