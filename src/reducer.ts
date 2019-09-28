import { TodoItem } from "./App";

export interface TodoState {
  todos: TodoItem[];
}

export interface TodoActionType {
  type: "add";
  payload: string;
}

export function reducer(state: TodoState, action: TodoActionType) {
  switch (action.type) {
    case "add":
      const lastTodo = state.todos[state.todos.length - 1];
      let id;
      if (lastTodo) {
        id = lastTodo.id + 1;
      } else {
        id = 1;
      }
      return {
        todos: [
          ...state.todos,
          {
            id,
            task: action.payload,
            done: false,
          },
        ],
      };
  }
}
