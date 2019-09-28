import * as React from "react";
import { TodoItem, TodoActionContext } from "../App";

interface TodoItemProps {
  todo: TodoItem;
}

export default function Todo({ todo }: TodoItemProps) {
  const dispatch = React.useContext(TodoActionContext);
  const handleTodoToggle = React.useCallback(() => {
    dispatch({ type: "toggle", payload: todo.id });
  }, [dispatch, todo]);

  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <input type="checkbox" checked={todo.done} onChange={handleTodoToggle} />
      {todo.task}
    </li>
  );
}
