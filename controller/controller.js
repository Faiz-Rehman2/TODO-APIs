import Todo from "../model/model.todo.js";

// Add new Todo
export const addTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }

  try {
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json({
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(400).json({ message: "Error creating Todo" });
  }
};

// Get all Todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(400).json({ message: "Error fetching Todos" });
  }
};

// Get single Todo
export const getTodoById = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(400).json({ message: "Error fetching Todo" });
  }
};

// Update Todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    if (!updatedTodo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    res.status(200).json({
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    res.status(400).json({ message: "Error updating Todo" });
  }
};

// Delete Todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    res.status(200).json({
      message: "Todo deleted successfully",
      data: deletedTodo,
    });
  } catch (error) {
    res.status(400).json({ message: "Error deleting Todo" });
  }
};
