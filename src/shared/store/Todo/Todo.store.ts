import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ITodo, TodoFilter } from "./lib/constants";

export interface TodoState {
  todos: ITodo[];
  filter: TodoFilter;
}

export interface TodoActions {
  addTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
  clearDoneTodos: () => void;
  updateTodo: (todo: ITodo) => void;
  setFilter: (filter: TodoFilter) => void;
}

export const initialState: TodoState = {
  todos: [],
  filter: TodoFilter.ALL,
};

export const useTodoStore = create<TodoState & TodoActions>()(
  persist(
    set => ({
      ...initialState,
      addTodo: (todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      deleteTodo: (todo) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== todo.id),
        })),
        clearDoneTodos: () => set((state) => ({ todos: state.todos.filter((item) => !item.isDone) })),
      updateTodo: (todo) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === todo.id ? todo : item
          ),
        })),
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "todo-storage", 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);