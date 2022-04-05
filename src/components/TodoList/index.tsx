import { useTasks } from "../../hooks/useTasks";
import { AddNewTask } from "../AddNewTask";

import { Container } from "./styles";

export function TodoList() {
  const { tasks, handleToggleCompletion } = useTasks()

  return (
    <main>
      <Container>
        <AddNewTask />

        <div className="todo__tasks">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <label 
                  className={`todo__checkbox--container ${
                    task.isCompleted ? "completed" : ""
                  }`}
                >
                  <input 
                    type="checkbox"
                    className="todo__checkbox--input"
                    onClick={() => handleToggleCompletion(task.id)}
                    checked={task.isCompleted}
                    hidden
                  />
                  <span className="todo__checkmark"></span>
                  {task.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  )
}