//Bài 1
// function isOddNumber(a) {
//   if (a % 2 == 1) return true;
//   else return false;
// }

//------------------------------------------------------------------

// function sumOfOdds(a, b) {
//   let total = 0;
//     for (let i = a; i <= b; i++) {
//         if (isOddNumber(i)) total = total + i;
//     }
//     return total;
// }

// console.log(sumOfOdds(2, 1000));

//-----------------------------------------------------------------

//Bàì 2
// function divisor(n) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             console.log(i);
//         }
//     }
// }

// divisor(15);

//--------------------------------------------------------------

// function factorial(number) {
//     total = 1;
//     for (i = 1; i <= number; i++){
//         total = total * i;
//     }
//     return total;
// }

// console.log(factorial(4));

//--------------------------------------------------------------

// function countFolding(thickness) {
//     let paper = 0.1;
//     let count = 0;

//     thickness = thickness * 1000;

//     while (paper < thickness) {
//         count += 1;
//         paper *= 2;
//     }

//     return count;
// }

// console.log(`Sau ${countFolding(1)} lần gấp thì đạt được độ dày là 1m`);

//-----------------------------------------------------------------------

// function countYears(dad, son) {
//     let count = 0;
//     for (let i = 0; son * 2 < dad; i++) {
//         count++;
//         son++;
//         dad++;
//     }
//     return count;
// }

// console.log(countYears(50, 24));

//------------------------------------------------

// function countChoGa(cho, ga) {
//   const DOG_LEG = 4;
//   const CHICK_LEG = 2;
//   const TOTAL = 36;
//   const TOTAL_LEG = 100;

//   let dog = 1;
//   let chicken = TOTAL - dog;

//   while (dog * DOG_LEG + chicken * CHICK_LEG != TOTAL_LEG) {
//     dog++;
//     chicken--;
//   }
//   console.log(`Số con chó là ${dog}, số con gà là ${chicken}`);
// }


// countChoGa();

//---------------------------------------------------

// function primeNumber(n) {
//     let flag = true; //kỹ thuật đặt cờ

//     if (n < 2) return false;


//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return flag;

// }

