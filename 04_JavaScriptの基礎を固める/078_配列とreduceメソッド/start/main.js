// const arry = [1, 2, 3, 4, 5];

// arry.reduce(function (accu, curr) {
//   console.log(accu, curr);
//   return accu + curr;
// });

const str = "animation";
const strArray = str.split("");
console.log(strArray);

const result = strArray.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
}, "");

console.log(result);
