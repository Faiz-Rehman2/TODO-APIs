import express from "express";
import {
  addTodo,
  getTodoById,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controller/controller.js";

const router = express.Router();

// Add a new Todo
router.post("/", addTodo);

// Get all Todos
router.get("/", getTodos);

// Get a single Todo by ID
router.get("/:id", getTodoById);

// Update a Todo by ID
router.put("/:id", updateTodo);

// Delete a Todo by ID
router.delete("/:id", deleteTodo);

export default router;
