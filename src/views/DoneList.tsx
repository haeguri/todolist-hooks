import * as React from "react";
import Todo from "./Todo";
import { TodoContext } from "../App";

export default function DoneList() {
  const { todos } = React.useContext(TodoContext);
  return (
    <div>
      <h3>완료된 일</h3>
      <ul>
        {todos
          .filter(t => t.done)
          .map(t => (
            <Todo key={t.id} todo={t} />
          ))}
      </ul>
    </div>
  );
}
