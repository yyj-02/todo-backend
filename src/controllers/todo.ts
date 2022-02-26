// src/controllers/todo.ts
import { TodoCollection } from "../models/todo";

export const listTodo = async () => {
  const data = await TodoCollection.find();
  return data;
};

export const createTodo = async (todoContent: Request["body"]) => {
  const data = await TodoCollection.create(todoContent);
  return data;
};

export const updateTodo = async (todoId: any, todoContent: Request["body"]) => {
  if (todoContent == null) {
    throw new Error("Todo is null");
  }
  const data = await TodoCollection.findByIdAndUpdate(todoId, todoContent);
  return data;
};

export const deleteTodo = async (todoId: any) => {
  const data = await TodoCollection.findByIdAndDelete(todoId);
  return data;
};
