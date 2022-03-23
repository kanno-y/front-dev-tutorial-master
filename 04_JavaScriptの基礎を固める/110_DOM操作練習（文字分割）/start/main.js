document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");

  //TODO:  for_of
  // const str = el.innerHTML.trim();
  // let concatStr = "";

  // for (let c of str) {
  //   // c = c.replace(" ", "&nbsp;");
  //   c = c.replace(/\s+/, "&nbsp;");
  //   concatStr += `<span class="char">${c}</span>`;
  // }
  // el.innerHTML = concatStr;

  //TODO:  reduce
  const str = el.innerHTML.trim().split("");
  el.innerHTML = str.reduce((accu, curr) => {
    curr = curr.replace(/\s+/, "&nbsp");
    return `${accu}<span class="char">${curr}</span>`;
  }, "");
});
