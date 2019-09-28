import { TodoItem } from "./App";

export interface TodoState {
  todos: TodoItem[];
}

export interface TodoActionType {
  type: "add" | "toggle";
  payload: any;
}

export function reducer(state: TodoState, action: TodoActionType) {
  switch (action.type) {
    case "add":
      const lastTodo = state.todos[state.todos.length - 1];

      return {
        todos: [
          ...state.todos,
          {
            id: lastTodo ? lastTodo.id + 1 : 1,
            task: action.payload,
            done: false,
          },
        ],
      };
    case "toggle":
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }

      return {
        todos: [...state.todos],
      };
  }
}
