// // hello関数
// // 引数渡す関数のことをコールバック関数と呼ぶ
// function hello(callback, lastname) {
//   console.log(`hello ` + callback(lastname));
// }
// // getName関数
// // function getName() {
// //   return "Code Mafia";
// // }

// // const firstName = function () {
// //   return "code";
// // };

// // 関数呼び出し
// hello(function (name) {
//   return "Code " + name;
// }, "Mafia");

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}
// 掛け算のコールバック関数
function multiply(a, b) {
  return a * b;
}
// 足し算のコールバック間す
function plus(a, b) {
  return a + b;
}

doSomething(3, 6, plus);
