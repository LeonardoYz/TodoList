import { Container } from "./styles";

export function AddNewTask() {
  return (
    <Container>
      <input 
        type="text" 
        className="add__input" 
        placeholder="task name"
      />

      <button className="add__button">
        Add
      </button>
    </Container>
  )
}