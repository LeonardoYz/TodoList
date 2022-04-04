import { createContext, ReactNode, useContext, useState } from "react";

interface TasksContextProps {
  activeFilter: string;
  handleActiveCurrentFilter: (arg: string) => void;
  isTaskCompleted: boolean;
  handleCompleteTask: () => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleActiveCurrentFilter(filter: string) {
    setActiveFilter(filter);
  }

  function handleCompleteTask() {
    setIsTaskCompleted(!isTaskCompleted);
  }

  return (
    <TasksContext.Provider
      value={{
        activeFilter,
        handleActiveCurrentFilter,
        isTaskCompleted,
        handleCompleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
