// src/routers/todo.ts
import express, { application } from "express";
import {
  listTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo";

export const router = express.Router();

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", async (req, res) => {
  try {
    const data = await listTodo();
    res.json(data);
  } catch (err) {
    res.json({ message: "Todo not found", err });
  }
});

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", async (req, res) => {
  try {
    const data = await createTodo(req.body);
    res.json({ message: "Todo created", data });
  } catch (err) {
    res.json({ message: "Todo not created", err });
  }
});

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", async (req, res) => {
  try {
    const data = await updateTodo(req.params.id, req.body);
    res.json({ message: "Todo updated", data });
  } catch (err) {
    res.json({ message: "Todo not updated", err });
  }
});

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteTodo(req.params.id);
    res.json({ message: "Todo deleted", data });
  } catch (err) {
    res.json({ message: "Todo not deleted", err });
  }
});
