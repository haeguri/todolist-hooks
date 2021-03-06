import * as React from "react";
import Todo from "./Todo";
import { TodoContext } from "../App";

export default function TodoList() {
  const { todos } = React.useContext(TodoContext);
  return (
    <div>
      <h3>할 일</h3>
      <ul>
        {todos
          .filter(t => !t.done)
          .map(t => (
            <Todo key={t.id} todo={t} />
          ))}
      </ul>
    </div>
  );
}
