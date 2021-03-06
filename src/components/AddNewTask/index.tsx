import { useTasks } from "../../hooks/useTasks";

import { Container } from "./styles";

export function AddNewTask() {
  const {
     taskName, 
     setTaskName, 
     handleCreateNewTask, 
     activeFilter 
  } = useTasks()
  
  return (
    <Container>
      {activeFilter !== "completed" && (
        <>
          <input 
            type="text" 
            className="add__input" 
            placeholder="task name"
            onChange={(event) => setTaskName(event.target.value)}
            value={taskName}
          />

          <button 
            className="add__button"
            onClick={handleCreateNewTask}
          >
            Add
          </button>
        </>
      )}
    </Container>
  )
}