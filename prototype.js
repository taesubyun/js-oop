// function Person(name, first, second, third) {
//   this.name = name;
//   this.first = first;
//   this.second = second;
//   this.third = third;
// }

// Person.prototype.sum = function () {
//   return "prototype 은 : " + (this.first + this.second);
// };

// const kim = new Person("kim", 10, 20);
// kim.sum = function () {
//   return "this 는 : " + (this.first + this.second);
// };
// const lee = new Person("lee", 10, 10);
// console.log(kim.sum());
// console.log(lee.sum());

// function taesubyun(name, age, live) {
//   this.name = name;
//   this.age = age;
//   this.live = live;
// }
// const A = new taesubyun("kkkkkk", 30, "INCHEON");
// A.what = function () {
//   return "하하하하씨발";
// };
// console.log(A);
// console.log(A.what());
// // 프로토타입의 의미는 객체가 생성될때마다 해당 객체의 메소드를 만들어 메모리에 할당하여 하는데 그렇게 하지 않고 생성자의 프로토타입에 정의함으로서,
// // 다른 객체들이 참고하여 사용할 수 있도록 하여 메모리를 효율적으로 사용할 수 있도록 함.

// function getPoint(number, point) {
//   this.number = number;
//   this.point = point;
//   this.sum = function () {
//     return `${this.number} ${this.point} 안녕하세요`;
//   };
// }
// const add = new getPoint(30, 40);
// console.log(add.sum());
