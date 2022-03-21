const todos = [
  {
    id: 1,
    title: "go to school",
    completed: true,
  },
  {
    id: 2,
    title: "go to musium",
    completed: true,
  },
  {
    id: 3,
    title: "go shopping",
    completed: false,
  },
];

// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i];
//   if (todo.completed === true) {
//     console.log(i, todo.title);
//   }
// }

// for_in
// for (let i in todos) {
//   let todo = todos[i];
//   if (todo.completed === true) {
//     console.log(i, todo.title);
//   }
// }

// for_of
for (let todo of todos) {
  if (todo.completed === true) {
    console.log(todo.title)
  }
}
