import { TasksProvider } from "./hooks/useTasks";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import { Wrapper } from "./styles/Wrapper";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <Wrapper>
      <TasksProvider>
        <GlobalStyles />
        <Header />
        <TodoList />
      </TasksProvider>
    </Wrapper>
  );
}
