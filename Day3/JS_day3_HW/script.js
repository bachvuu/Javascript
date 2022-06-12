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
  month;
};

//Bài 5
let trafficLight = function (light) {
  if (light == "Red") console.log("Dừng lại");
  else if (light == "Green") console.log("Được phép di chuyển");
  else if (light == "Yellow") console.log("Giảm tốc độ và dừng lại");
  else console.log("Vui lòng nhập Red, Green, hoặc Yellow");
};


