let dog = {
  name: "Milu",
  age: 5,
  breed: "chó vàng",
  color: "vàng",
  gender: "male",
  legs: 4,
  "favourite food": "rau muống",
  eat: function () {
    console.log(`${this.name} is eating ${this["favourite food"]}, yum yum...`);
    return this;
  },

  run: function () {
    console.log(`${this.name} is running on ${this.legs} legs`);
    return this;
  },
  bark: function () {
    console.log(`Woof woof woof ...`);
    return this;
  },
};

//bài 1
console.log(dog);

//bài 2
console.log(dog.name);

//bài 3
console.log(dog["favourite food"]);

//bài 4
dog.color = "Brown";
console.log(dog.color);

//bài 5
dog.age += 2;
console.log(dog.age);

//bài 5
dog.eat();

//bài 6
dog.run();

//bài 7
for (const key in dog) {
  console.log(`${key}`);
}

//bài 8
for (const key in dog) {
  console.log(`${dog[key]}`);
}

//bài 9
dog["isCrazy"] = true;

//bài 10
dog["crazy"] = function () {
  if (dog.isCrazy) {
    for (let i = 0; i < 5; i++) {
      this.run().bark();
    }
  } else {
    console.log(`${this.name} is not crazy`);
  }
};

//bài 10
dog["isCrazy"] = false;

//bài 11
dog.crazy();

//bài 12
delete dog.isCrazy;

//bài 13
dog.crazy();
//vì đã mất điều kiện để check ban đầu nên phương thức chạy luôn trường hợp else

//bài 14
for (let key in dog) {
  if (typeof dog[key] !== "function") {
    console.log(`${key} có giá trị là ${dog[key]}`);
  }
}

//bài 15
clone = dog;

console.log(clone);
console.log(dog);

clone.name = "Vàng";

console.log(clone);
console.log(dog);

let copy = {};

for (let key in dog) {
  copy[key] = dog[key];
}

console.log(copy);
console.log(dog);

copy.name = "Ovaltine";

console.log(copy);
console.log(dog);
