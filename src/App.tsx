import React from "react";
import TodoList from "./views/TodoList";
import DoneList from "./views/DoneList";
import TodoInput from "./views/TodoInput";
import { sampleTodoList } from "./samples/sampleTodoList";
import { reducer, TodoActionType, TodoState } from "./reducer";

export interface TodoItem {
  id: number;
  task: string;
  done: boolean;
}

export const TodoContext = React.createContext((null as unknown) as TodoState);
export const TodoActionContext = React.createContext(
  (null as unknown) as React.Dispatch<TodoActionType>
);

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    todos: sampleTodoList,
  });

  return (
    <TodoActionContext.Provider value={dispatch}>
      <TodoContext.Provider value={state}>
        <TodoInput />
        <TodoList />
        <DoneList />
      </TodoContext.Provider>
    </TodoActionContext.Provider>
  );
}

export default App;
