let x = 10;

let isHandsome = true;

if (isHandsome) {
  console.log(`Thầy giáo Bar max đẹp trai`);
} else {
  console.log(`Thầy giáo Be ảo ma canada`);
}

const Nhi = {
  name: "Bùi Lan Nhi",
  age: 15,
  isBeautiful: false,
};

if (Nhi.isBeautiful) {
  console.log("Hùng thích Nhi");
} else {
  console.log("Hùng không thích Nhi");
}

//Exercise 1
let findBMI = function (w, h) {
  const BMI = w / h ** 2;

  if (BMI <= 16) {
    console.log("Gầy độ III");
  } else if (BMI <= 17.5) {
    console.log("Gầy độ II");
  } else if (BMI <= 18.5) {
    console.log("Gầy độ I");
  } else if (BMI <= 25) {
    console.log("Bình thường");
  } else if (BMI <= 30) {
    console.log("Hơi béo");
  } else if (BMI <= 35) {
    console.log("Béo phì độ I");
  } else if (BMI <= 40) {
    console.log("Béo phì độ II");
  } else {
    console.log("Béo phì độ III");
  }
};

findBMI(86, 1.78);

//Exercise 2
let findMaxOfThree = function (a, b, c) {
  let max = a;

  if (max < b) max = b;
  if (max < c) max = c;

  console.log(`Số lớn nhất là ${max}`);
};

findMaxOfThree(10, 30, 1000000);

//Exercise 3
let calcWaterBill = function (m3) {
  let price;

  if (m3 <= 10) price = 45000;
  else if (m3 <= 20) price = (m3 - 10) * 11000 + 90000;
  else if (m3 <= 30) price = (m3 - 20) * 13000 + 200000;
  else price = (m3 - 30) * 15000 + 330000;

  console.log(`Tổng số tiền phải trả cho ${m3} khối nước là ${price}`);
};

calcWaterBill(50);

//Exercise 4
let calcTaxiFee = function (km) {
  let price;
  let openPrice = 10000;

  if (km <= 30) price = km * 11000;
  else price = (km - 30) * 9500 + 330000;

  console.log(`Tổng bill cho ${km} là ${price + openPrice}`);
};

calcTaxiFee(1000);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//let condition = false;

//while (!condition) {
//let agree = confirm("Linh ơi có đi chơi với mình không?");
//if (agree) {
//condition = true;
//}
//}

//Chơi game đoán số
//let luckynum = 9;
//let condition = false;

//while (!condition) {
//let guess = prompt("Đoán số đê!");
//if (guess == luckynum) {
//condition == true;
//console.log("Ơ được");
//}
//}

//In ra các số chẵn trong khoảng từ 100

for (let i = 1; i <= 100; i++) {
  if (i % 3 && i % 5) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Fizz");
  }
}
