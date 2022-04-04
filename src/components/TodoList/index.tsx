import { useTasks } from "../../hooks/useTasks";
import { AddNewTask } from "../AddNewTask";

import { Container } from "./styles";

export function TodoList() {
  const { isTaskCompleted, handleCompleteTask } = useTasks()

  return (
    <main>
      <Container>
        <AddNewTask />

        <div className="todo__tasks">
          <ul>
            <li>
              <label 
                className={`todo__checkbox--container ${
                  isTaskCompleted ? "completed" : ""
                }`}
              >
                <input 
                  type="checkbox"
                  className="todo__checkbox--input"
                  onClick={handleCompleteTask}
                  hidden
                />
                <span className="todo__checkmark"></span>
                Do coding challenges
              </label>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  )
}