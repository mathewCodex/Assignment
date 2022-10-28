const express = require("express");
const todoController = require("../mvc/todoController");
const router = express.Router();

//TODO routes..
router.get("/", todoController.todo_LIST);

/////
// router.post("/", todoController.blog_create_post);

//creating a post request..
router.post("/create", todoController.create_TODO);
//geting id:,
router.get("/:id", todoController.todo_details);

//creating an handler for delete request..
router.delete("/:id", todoController.delete_TODO);

module.exports = router;
