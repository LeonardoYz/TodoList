import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

interface TasksContextProps {
  tasks: Tasks[];
  activeFilter: string;
  taskName: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  handleActiveCurrentFilter: (arg: string) => void;
  handleToggleCompletion: (arg: string) => void;
  handleCreateNewTask: () => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface Tasks {
  id: string;
  name: string;
  isCompleted: boolean;
}

const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleActiveCurrentFilter(filter: string) {
    setActiveFilter(filter);
  }

  function handleCreateNewTask() {
    if (taskName === "") return

    const newTask = {
      id: uuid(),
      name: taskName, 
      isCompleted: false,
    }

    setTasks(prevTasks => [...prevTasks, newTask]);
    setTaskName("")
  }

  function handleToggleCompletion(id: string) {
    const completedTask = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    }: task)

    setTasks(completedTask)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeFilter,
        taskName,
        setTaskName,
        handleActiveCurrentFilter,
        handleToggleCompletion,
        handleCreateNewTask,
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
