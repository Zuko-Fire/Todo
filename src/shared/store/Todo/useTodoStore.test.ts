import { act } from "@testing-library/react";
import { useTodoStore } from "./Todo.store";
import { TodoFilter } from "./lib/constants";

describe("useTodoStore", () => {
  beforeEach(() => {
    // Очищаем localStorage перед каждым тестом
    localStorage.clear();
  });

  it("should initialize with the correct initial state", () => {
    const { todos, filter } = useTodoStore.getState();
    expect(todos).toEqual([]); // Начальное состояние todos должно быть пустым массивом
    expect(filter).toBe(TodoFilter.ALL); // Начальный фильтр должен быть ALL
  });

  it("should add a todo", () => {
    const todo = { id: '1', name: "New Todo", isDone: false };
    const { addTodo } = useTodoStore.getState();

    act(() => {
      addTodo(todo);
    });

    const { todos } = useTodoStore.getState();
    expect(todos).toHaveLength(1); // Должен быть добавлен один элемент
    expect(todos[0]).toEqual(todo); // Добавленный элемент должен соответствовать todo
  });

  it("should delete a todo", () => {
    const todo1 = { id: '1', name: "Todo 1", isDone: false };
    const todo2 = { id: '2', name: "Todo 2", isDone: false };
    const { addTodo, deleteTodo } = useTodoStore.getState();

    act(() => {
      addTodo(todo1);
      addTodo(todo2);
      deleteTodo(todo1);
    });

    const { todos } = useTodoStore.getState();
    expect(todos).toHaveLength(1); // После удаления должно остаться только одно задание
    expect(todos[0]).toEqual(todo2); // Оставшийся элемент должен быть todo2
  });



  it("should set the filter", () => {
    const { setFilter } = useTodoStore.getState();

    act(() => {
      setFilter(TodoFilter.ACTIVE);
    });

    const { filter } = useTodoStore.getState();
    expect(filter).toBe(TodoFilter.ACTIVE); // Фильтр должен быть установлен на ACTIVE
  });

});