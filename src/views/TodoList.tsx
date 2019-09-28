import * as React from "react";
import Todo from "./Todo";
import { TodoContext } from "../App";

export default function TodoList() {
  const { todos } = React.useContext(TodoContext);
  return (
    <div>
      <ul>
        {todos.map(t => (
          <Todo key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
}
