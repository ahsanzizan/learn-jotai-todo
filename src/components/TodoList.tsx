import { useAtom } from "jotai";
import { Todo } from "../types/todo";
import {
  removeTodoAtom,
  todosAtom,
  toggleTodoAtom,
  updateTodoAtom,
} from "../store";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";

function TodoItems() {
  const [todos] = useAtom(todosAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={4} key={todo.id}>
          <Checkbox onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={4}
            value={todo.todoText}
            onChange={(e) =>
              updateTodo({ id: todo.id, todoText: e.target.value })
            }
          />
          <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
        </Flex>
      ))}
    </>
  );
}

export default function TodoList() {
  return (
    <Container margin={"unset"}>
      <Heading>Todo List</Heading>
      <TodoItems />
    </Container>
  );
}
