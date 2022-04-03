import { useState } from "react";
import { AddNewTask } from "../AddNewTask";

import { Container } from "./styles";

export function TodoList() {
  const [isCheckboxActive, setIsCheckboxActive] = useState(false)

  return (
    <main>
      <Container>
        <AddNewTask />

        <div className="todo__tasks">
          <ul>
            <li>
              <label 
                className={`todo__checkbox--container ${
                  isCheckboxActive ? "completed" : ""
                }`}
              >
                <input 
                  type="checkbox"
                  className="todo__checkbox--input"
                  onClick={() => setIsCheckboxActive(!isCheckboxActive)}
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