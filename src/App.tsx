import React from "react";
import TodoList from "./views/TodoList";
import TodoInput from "./views/TodoInput";
import { sampleTodoList } from "./samples/sampleTodoList";
import { reducer, TodoActionType } from "./reducer";

export interface TodoItem {
  id: number;
  task: string;
  done: boolean;
}

export const TodoContext = React.createContext({ todos: sampleTodoList });
export const TodoActionContext = React.createContext(
  (null as unknown) as React.Dispatch<TodoActionType>
);

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    todos: [],
  });

  return (
    <div>
      <TodoActionContext.Provider value={dispatch}>
        <TodoContext.Provider value={state}>
          <TodoInput />
          <TodoList />
        </TodoContext.Provider>
      </TodoActionContext.Provider>
    </div>
  );
}

export default App;
