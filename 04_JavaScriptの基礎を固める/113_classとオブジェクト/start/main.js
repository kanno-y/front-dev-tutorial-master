const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log("hello");
  },
};

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }
  printFullName() {
    console.log(`${this.first_name} ${this.last_name}`);
  }
}

const ta = new MyObj();
ta.printFullName();
