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
  if (a > b && a > c) {
    console.log(`${a} là số lớn nhất`);
  } else if (b > a && b > c) {
    console.log(`${b} là số lớn nhất`);
  } else if (c > a && c > b) {
    console.log(`${c} là số lớn nhất`);
  } else if (a == b && a == c) {
    console.log("3 số bằng nhau!");
  } else {
    console.log(`Có 2 số bằng nhau!`);
  }
};

findMaxOfThree(10, 10, 10);


