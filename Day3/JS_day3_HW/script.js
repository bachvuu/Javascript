//Level 1
//Bài 1
let isOddNumber = function (number) {
  if (number % 2 == 0) {
    console.log(`${number} là số chẵn`);
  } else {
    console.log(`${number} là số lẻ`);
  }
};

//Bài 2
let maxOfTwo = function (a, b) {
  let max = a;
  if (a < b) max = b;
  console.log(`Số lớn nhất là ${max}`);
};

// Bài 3
let divisibleByThreeAndFive = function (number) {
  if (number % 3 == 0 && number % 5 == 0) console.log(true);
  else console.log(false);
};

// Bài 4
let season = function (month) {
  if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
  } else if (month == 3 || month == 4 || month == 5) {
    console.log("Spring");
  } else if (month == 6 || month == 7 || month == 8) {
    console.log("Summer");
  } else if (month == 9 || month == 10 || month == 11) {
    console.log("Fall");
  } else {
    console.log("Invalid season");
  }
};

//Bài 5
let trafficLight = function (light) {
  light = light.toLowercase();

  if (light === "red") console.log(light);
  else if (light === "green") console.log("Được phép di chuyển");
  else if (light === "yellow") console.log("Giảm tốc độ và dừng lại");
  else console.log("Nhập tín hiệu đèn Red, Green hoặc Yellow!");
};

//Bài 6
let calcCommissions = function (totalSales) {
  let commission;
  if (totalSales > 300000000) {
    commission = totalSales * 0.2;
    console.log(`Tiền hoa hồng là ${commission}`);
  } else if (totalSales <= 300000000 && totalSales > 100000000) {
    commission = totalSales * 0.1;
    console.log(`Tiền hoa hồng của bạn là ${commission}`);
  } else {
    commission = totalSales * 0.05;
    console.log(`Tiền hoa hồng của bạn là ${commission}`);
  }
};

calcCommissions(100000000);

//Level 2