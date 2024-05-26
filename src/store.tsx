import { atom } from "jotai";
import { Todo } from "./types/todo";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "./utils/todoManager";

export const todosAtom = atom<Todo[]>([]);
export const newTodoTextAtom = atom<string>("");

export const addTodoAtom = atom(
  () => "",
  (get, set, todoText: string) => {
    set(todosAtom, addTodo(get(todosAtom), todoText));
  }
);

export const toggleTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, toggleTodo(get(todosAtom), id));
  }
);

export const updateTodoAtom = atom(
  () => "",
  (get, set, { id, todoText }: { id: number; todoText: string }) => {
    set(todosAtom, updateTodo(get(todosAtom), id, todoText));
  }
);

export const removeTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, removeTodo(get(todosAtom), id));
  }
);
