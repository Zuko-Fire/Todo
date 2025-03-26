import { ITodo, useTodoStore, TodoFilter } from "../../shared/store/Todo";

export const useFilteredTodos = (todos: ITodo[]) => {
  const filter = useTodoStore((state) => state.filter);

  return todos.filter((todo) => {
    switch (filter) {
      case TodoFilter.ALL:
        return true;
      case TodoFilter.ACTIVE:
        return !todo.isDone;
      case TodoFilter.DONE:
        return todo.isDone;
      default:
        return true;
    }
  });
};