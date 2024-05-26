import { Box, ChakraProvider, Divider, theme } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoField from "./components/TodoField";
import TodoList from "./components/TodoList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>
        <Box maxWidth={"8xl"} margin={"auto"} p={10}>
          <Navbar />
          <TodoField />
          <TodoList />
        </Box>
      </JotaiProvider>
    </ChakraProvider>
  );
}

export default App;
