
// 無名関数（コールバック関数）
// function hello(name, age) {
//   console.log(`helle ` + name + age);
//   return hello + age;
// }

// 上と同じ意味
const hello = function (name, age) {
  console.log(`helle ` + name + age);
  return hello + age;
};
hello(`taro`, 22);
const returnVal = hello(`tanaka`, 33);
console.log(returnVal);
