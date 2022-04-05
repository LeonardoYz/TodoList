import { useTasks } from "../../hooks/useTasks";
import { Tasks } from "../../types";

import { MdDeleteOutline } from "react-icons/md";

import { Container } from "./styles";
import { IconContext } from "react-icons";

export function Task({ id, name, isCompleted }: Tasks) {
  const { handleToggleCompletion, activeFilter } = useTasks();

  return (
    <Container>
      {activeFilter === "completed" ? (
        <>
          <li className="todo">
            <label
              className={`todo__checkbox--container ${
                isCompleted ? "completed" : ""
              }`}
            >
              <input
                type="checkbox"
                className="todo__checkbox--input"
                onClick={() => handleToggleCompletion(id)}
                checked={isCompleted}
                readOnly
                hidden
              />
              <span className="todo__checkmark"></span>
              {name}
            </label>

            <button 
              type="button" 
              className="todo__delete"
            >
              <IconContext.Provider
                value={{
                  size: "1.6875rem",
                  className: "todo__delete--icon",
                }}
              >
                <MdDeleteOutline />
              </IconContext.Provider>
            </button>
          </li>
        </>
      ) : (
        <li className="todo">
          <label
            className={`todo__checkbox--container ${
              isCompleted ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              className="todo__checkbox--input"
              onClick={() => handleToggleCompletion(id)}
              checked={isCompleted}
              readOnly
              hidden
            />
            <span className="todo__checkmark"></span>
            {name}
          </label>
        </li>
      )}
    </Container>
  );
}
