const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

const lee = {
  name: "lee",
  first: 300,
  second: 400,
  sum: function () {
    return this.first + this.second;
  },
};

console.log(kim.sum());
console.log(lee.sum());

const d1 = new Date("2020-5-10");
console.log(d1.getFullYear());
console.log(d1.getMonth());

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

console.log(Person());
console.log(new Person());

const yun = new Person("YOON", 20, 40, 60);
console.log(yun);
console.log(yun.sum());

const person = "윤태섭";
if (person.length !== 0) {
  console.log(person + 1);
}

const obj = { name: "윤태섭", nge: 31, live: "incheon" };

console.log(Object.keys(obj));
