// src/models/todo.ts
import mongoose from "mongoose";
import { Todo } from "../common/index";

const TodoSchema = new mongoose.Schema<Todo>({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
  status: {
    type: "Boolean",
    required: true,
  },
});

export const TodoCollection = mongoose.model("todo", TodoSchema);
