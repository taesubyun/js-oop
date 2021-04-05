const memberArray = ["Lee", "Kim", "Choi"];
console.group("배열그룹");
for (let i = 0; i < memberArray.length; i++) {
  console.log(i, "번째는 " + memberArray[i]);
}
console.groupEnd("배열그룹");

// ------------------------------------------------------------------------------------------

const memberObject = {
  manager: "Lee",
  developer: "Kim",
  designer: "Choi",
};

console.group("객체그룹");
for (let name in memberObject) {
  console.log(memberObject[name]);
}
console.groupEnd("객체그룹");
