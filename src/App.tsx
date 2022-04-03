import { Header } from "./components/Header";

import { Container } from "./styles/Container";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
    </Container>
  );
}
