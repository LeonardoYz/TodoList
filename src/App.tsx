import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import { Container } from "./styles/Container";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <TodoList />
    </Container>
  );
}
