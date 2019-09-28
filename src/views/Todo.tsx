import * as React from "react";
import { TodoItem } from "../App";

interface TodoItemProps {
  todo: TodoItem;
}

export default function Todo(props: TodoItemProps) {
  return <li>{props.todo.task}</li>;
}
