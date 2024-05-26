import React from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { addTodoAtom, newTodoTextAtom } from "../store";

export default function TodoField() {
  const [todoText, setTodoText] = useAtom(newTodoTextAtom);
  const [, addTodo] = useAtom(addTodoAtom);

  return (
    <Flex
      pt={4}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={4}
      marginBottom={12}
    >
      <Input
        placeholder="Your todo..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <Button
        onClick={() => {
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Add
      </Button>
    </Flex>
  );
}
