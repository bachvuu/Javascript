# Toán tử
- Có 5 loại toán tử:

1. Arithmetic
2. Comparision
3. Assignment
4. Logical
5. Bitwise

- Quy tắc thực hiện biểu thức theo thứ tự từ trái qua phải, dựa theo độ ưu tiên toán tử. Các toán tử có độ
ưu tiên khác nhau, quyết định phép tính nào sẽ được thực hiện trước

- JavaScript cũng tự động chuyển đổi các kiểu dữ liệu của các toán hạng về kiểu phù hợp khi thực hiện
các biểu thức tính toán hay so sánh


# Type conversions
- JavaScript tự động chuyển đổi kiểu dữ liệu khi thực hiện tính toán các giá trị, đồng thời cung cấp thêm
một số phương thức để chuyển đổi thủ công từ kiểu này sang kiểu khác


vd:

let result = 1 + 2; 

let answer = "1 + 2 = " + result;
=> Kết quả chuyển từ number sang string

let other = 1 - "1";
=> kết quả 1 từ string sang number

## Cách ép kiểu

String(123) -> "123"

String(true) -> "true"


Number(null); -> 0
Number(undefined); -> NaN
Numeber(true); -> 1
Number(false); -> 0
Number("  12  "); -> 12
Number("12ab"); -> NaN
Number(""); -> 0


### 1 số giá trị đặc biệt
"", 0, null, undefined, NaN;
=> kết quả false

Còn lại tất cả giá trị khác là true


# Arithmetic Operators
- Toán tử số học cơ bản: + - * / % **

- Cộng (+), trừ (-), nhân (*), chia (/)

- % là chia lấy số dư
vd: 5 % 3 -> 2

- ** là lũy thừa
vd: 2**2 -> 4

- Mọi phép tính với NaN đều trả kết quả NaN



### Đối với kiểu string phép + chuyển đổi kiểu của toán hạng về kiểu string và thực hiện nối chuỗi

1 + "2"; -> "12"
1 + 2 + "3"; -> "33"
"1" + true + 0; -> "1true0"

- Phép nối chuỗi chỉ hoạt động duy nhất với toán tử + , với những toán tử số học khác, mọi kiểu dữ liệu
được chuyển về number

6 - "2"; -> 7
5 % "3"; -> 4

# Assignment Operators
### Toán tử gán chỉ hoạt động với biến

let x = 1;
let y = 1 + 2 + 3; -> 6

### gán kết hợp với toán tử số học
x += 1; 
viết tắt của x = x + 1 -> 2

y/= 2; 
viết tắt của y = y / 2 -> 3


## Increment, Decrement (Tự tăng giảm)

++ và -- là hai toán tử đặc biệt, nó thực hiện phép tính tăng/giảm giá trị của biến đi 1, hai toán tử này
có thể đặt ở trước biến - prefix hoặc sau biến - postfix. Khi sử dụng trong một câu lệnh riêng biệt thì
không có sự khác nhau

Tuy nhiên, khi dùng trong một biểu thức, postfix - tăng/giảm giá trị đi 1 và trả về giá trị trước đó (cũ),
prefix - cũng tăng/giảm giá trị đi 1 nhưng trả về giá trị sau (mới)

vd:
let a = 1;
b = a++ + 1; -> a = 2, b = 2
let c = ++a + 3; -> a = 3, c = 6


let d = a++ + ++a - a-- - --a;
    d = 3 + 5 -5 - 3 = 0
    a = 3

# Toán tử so sánh
== != !== >= <= < > ===

- Kết quả của các phép so sánh luôn luôn là một giá trị boolean


### == != > >= < <= tự động chuyển đổi kiểu của 2 toán hạng về cùng một kiểu và thực hiện so sánh

2 < 2; -> False
2 <= 2; -> True

2 == "2"; -> True
2 != "2"; -> False

### === và !== (strict comparison) so sánh cả kiểu giá trị của dữ liệu

2 === 2; -> true
2 === "2"; -> false
2 != "2"; -> true
"2" === "2"; -> true

## So sánh chuỗi

JavaScript sử dụng bảng mã Unicode, khi so sánh 2 chuỗi, nó thực hiện so sánh từng ký tự dựa theo
thứ tự trong bảng mã

"a" > "A"; -> true 

"A" > "Z"; -> false
 
"Ba" < "Ba Nguyễn"; -> true

### null, undefined, NaN
### null & undefined là 2 trường hợp đặc biệt

null == 0; -> false
null <= 0; -> true
null == undefined; -> true
null === undefined; -> false


- Mọi biểu thức so sánh với NaN đều cho kết quả là false


#Logical Operators

AND - &&
OR - || 
NOT - !-

### OR  tìm giá trị đúng đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối cùng trong biểu thức



true || false; -> true
0 || 1; -> 1

0 || false || ""; -> ""

"abc" || "xyz"; -> "abc"




### && - AND tìm giá trị sai đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối cùng trong biểu thức

true && false; -> false
0 && 1; -> 0
0 && false && ""; -> 0
"abc" && "xyz"; -> "xyz"

### !- NOT chuyển giá trị về kiểu boolean & phủ định của nó

!""; -> true
!"123"; -> false
!!false; -> false
!!"xyz"; -> true
!!!!!!!!!!false; -> false
