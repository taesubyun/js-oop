const memberArray = ["Lee", "Kim", "Choi"];
console.log("memberArray[2]는 " + memberArray[2]);

const memberObject = {
  manager: "Lee",
  developer: "Kim",
  designer: "Choi",
};

memberObject.designer = "+ Choi 추가함";

console.log("memberObject.designer는 " + memberObject.designer);
console.log("memberObject['designer']는 " + memberObject["designer"]);

delete memberObject.designer;
console.log("삭제한 뒤에 designer는 " + memberObject.designer);
