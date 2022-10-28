const TODO = require("../models/todoSchema");

//we going to use blog_index,blog_details,blog_create_get,blog_create_post,blog_delete

//first w e create the function..
//find all todoList...
const todo_LIST = (req, res) => {
  TODO.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//find a todo list
const todo_details = (req, res) => {
  const id = req.params.id;
  TODO.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(render({ title: "TodoList not found" }));
    });
};
// const creat_TODO = (req, res) => {
//   res.render("blogs/create", { title: "Create a new Blog" });
// };
//Adding a todo list
const create_TODO = (req, res) => {
  const addTodo = new TODO(req.body);
  addTodo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//   TODO.create(req.body)
//     .then(function (result) {
//       res.send(result);
//     })
//     .catch(err);
// };

//deleting a todo list
const delete_TODO = (req, res) => {
  const id = req.params.id;
  TODO.findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//exporting a todolist
module.exports = {
  todo_LIST,
  todo_details,
  create_TODO,

  delete_TODO,
};
