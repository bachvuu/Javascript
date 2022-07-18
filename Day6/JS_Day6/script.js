// let dog = {
//   name: "Milu",
//   age: 5,
//   breed: "Chó ta",
//   color: "vàng",
//   gender: "male",
//   legs: 4,
//   "favourite food": "rau muống",
//   eat: function () {
//     console.log(`${this.name} is eating ${this["favourite food"]}, yum yum...`);
//     return this;
//   },

//   run: function () {
//     console.log(`${this.name} is running on ${this.legs} legs`);
//     return this;
//   },
//   bark: function () {
//     console.log(`Woof woof woof ...`);
//     return this;
//   },
// };

//---------------------------------------------------------------------------------

// function Dog(name, age, breed, gender, color, favoriteFood) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.gender = gender;
//   this.color = color;
//   this["favorite food"] = favoriteFood;
//   this.legs = 4;
//   this.specials = "Mammal";
//   this.ears = 2;
//     this.eyes = 2;
//     this.isCrazy = false;
// }

// Dog.prototype.eat = function () {
//   console.log(`${this.name} is eating ${this["favorite food"]}! yum yum...`);
// };

// Dog.prototype.run = function () {
//   console.log(`${this.name} is running on ${this.legs}`);
// };

// Dog.prototype.bark= function(){
//     console.log("Woof woof woof ...");
// };

// const linh = new Dog(
//   "Linh",
//   17,
//   "Chiahuahua",
//   "Female",
//   "Yellow",
//   "Bún đậu mắm tôm"
// );

// const nhi = new Dog("Nhi", 19, "Corgi", "Female", "Brown", "Cồn");
// const tung = new Dog("Tùng", 22, "Homo Sapien", "Male", "Yellow", "Bún chả");
// const hongAnh = new Dog("Hồng Anh", 27, "Homo Sapien", "Male", "Red", "Bia");

// console.log(linh);
// console.log(nhi);
// console.log(tung);
// console.log(hongAnh);

// linh.legs = 3;
// console.log(linh);

// linh.eat = function () {
//     console.log(`${this.name} không ăn theo 1 cách bình thường`);
// }

//---------------------------------------------------------------------------------------

function Weapon(type, damage) {
  this.type = type;
  this.damage = damage;
  this.color = color;
  this.recoil = recoil;
}

function Character(name, weapon, hp, speed) {
  this.alive = true;
  this.name = name;
  this.weapon = weapon;
  this.health = hp;
  this.speed = speed;
}

const knife = new Weapon("melee", 10);
const ak47 = new Weapon("rifle", 25);
const brick = new Weapon("melee", 15);
const op = new Weapon("sniper", 100);

const nhi = new Character("Nhi", ak47, 100, "20km/h");
const linh = new Character("Linh", brick, 100, "50km/h");
const hung = new Character("Hùng", op, 100, "5km/h");
const ha = new Character("Hà", knife, 100, "10km/h");

Character.prototype.changeWeapon = function (weapon) {
  this.weapon = weapon;
};

Character.prototype.attack = function (other) {
  const damaged = this.weapon.damage - other.armor;
  other.health -= damaged;
  if (other.blood <= 0) {
    other.alive = false;
  }
};

let winner;

while (true) {
  linh.attack(nhi);
  if (!nhi.alive) {
    winner == linh;
    break;
  }
  nhi.attack(linh);
  if (!linh.alive) {
    winner = nhi;
    break;
  }
}

console.log(`Chuc mung ${winner.name} da gianh duoc Hung cho rieng minh`);

ha.attack(hung);
