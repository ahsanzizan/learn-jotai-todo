import { Todo } from "../types/todo";

export const addTodo = (todos: Todo[], todoText: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map((todo) => todo.id))),
    todoText,
    isDone: false,
  },
];

export const updateTodo = (todos: Todo[], id: number, newTodoText: string) =>
  todos.map((todo) => ({
    ...todo,
    todoText: todo.id === id ? newTodoText : todo.todoText,
  }));

export const toggleTodo = (todos: Todo[], id: number) =>
  todos.map((todo) => ({
    ...todo,
    isDone: todo.id === id ? !todo.isDone : todo.isDone,
  }));

export const removeTodo = (todos: Todo[], id: number) =>
  todos.filter((todo) => todo.id !== id);
