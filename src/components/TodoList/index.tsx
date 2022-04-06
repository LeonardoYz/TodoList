import { useTasks } from "../../hooks/useTasks";
import { AddNewTask } from "../AddNewTask";
import { Task } from "../Task";

import { MdDeleteOutline } from "react-icons/md";

import { BtnContainer, Container } from "./styles";

export function TodoList() {
  const { tasks, activeFilter, handleDeleteAllCompletedTasks } = useTasks();
  let filteredTasks = null;
  const isFinishedAnyTaskAndFilterEqualsCompleted = tasks.some(
    task => task.isCompleted && activeFilter === "completed"
  )

  function filterTasks(needFilter: boolean, isFinished: boolean) {
    if (needFilter) {
      filteredTasks = tasks
      .filter(task => task.isCompleted === isFinished)
      .map(task => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          isCompleted={task.isCompleted}
        />
      ));

      return
    }

    filteredTasks = tasks.map(task => (
      <Task
        key={task.id}
        id={task.id}
        name={task.name}
        isCompleted={task.isCompleted}
      />
    ));
  }

  if (activeFilter === "active") {
    filterTasks(true, false)
  } else if (activeFilter === "completed") {
    filterTasks(true, true)
  } else {
    filterTasks(false, false)
  }

  return (
    <main>
      <Container isCompleted={activeFilter === "completed"}>
        <AddNewTask />

        <div className="tasks">
          <ul>
            {filteredTasks}
            {isFinishedAnyTaskAndFilterEqualsCompleted && (
              <BtnContainer>
                <button
                  type="button" 
                  className="delete-button"
                  onClick={handleDeleteAllCompletedTasks}
                >
                  <MdDeleteOutline size={12} color="#fff" />
                  delete all
                </button>
              </BtnContainer>
            )}
          </ul>
        </div>
      </Container>
    </main>
  );
}
