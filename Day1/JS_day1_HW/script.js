//Bài 1
let USD2VND = function () {
  USD = prompt("Nhập số tiền Đô La muốn chuyển đổi:");
  VND = USD * 23500;
  console.log(`${USD} Đô La Mỹ = ${VND} Việt Nam Đồng`);
};

USD2VND();

//Bài 2
let CompoundInterest = function () {
  P = prompt("Số tiền gốc ban đầu?");
  r = prompt("Lãi suất hàng nằm?");
  n = prompt("Số lần ghép lãi hàng năm?");
  t = prompt("Số năm gửi ngân hàng?");
  A = P * (1 + r / n) ** (n * t);
  console.log(`Bạn sẽ có số tiền là ${A} trong ${t} năm.`);
};

CompoundInterest();
