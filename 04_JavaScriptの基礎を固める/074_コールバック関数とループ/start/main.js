// const arry = [1, 2, 3, 4, 5];

// function forEach(ary) {
//   for (let i = 0; i < ary.length; i++) {
//     console.log(ary[i]);
//   }
// }
// forEach(arry);

// コールバック関数を用いて書き換える
const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}

function double(val) {
  val = val * 2;
  log(val);
}

forEach(arry, double);
