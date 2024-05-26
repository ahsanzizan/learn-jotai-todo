import { Button, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { todosSeeder } from "../seeders/todos";
import { todosAtom } from "../store";

export default function Navbar() {
  const [, setTodos] = useAtom(todosAtom);

  return (
    <Flex pt={4} alignItems={"center"} gap={4} justifyContent={"space-between"}>
      <div></div>
      <Button onClick={() => setTodos(todosSeeder)}>Load seeders</Button>
    </Flex>
  );
}
