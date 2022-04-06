import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { Tasks } from "../types";

interface TasksContextProps {
  tasks: Tasks[];
  activeFilter: string;
  taskName: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  handleActiveCurrentFilter: (arg: string) => void;
  handleToggleCompletion: (arg: string) => void;
  handleCreateNewTask: () => void;
  handleDeleteTask: (arg: string) => void;
  handleDeleteAllCompletedTasks: () => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const storageTasks = localStorage.getItem("tasks");

    if (storageTasks) {
      return JSON.parse(storageTasks)
    }

    return [];
  });

  const prevTaskRef = useRef<Tasks[]>()

  useEffect(() => {
    prevTaskRef.current = tasks
  })

  const taskPreviousValue = prevTaskRef.current ?? tasks

  useEffect(() => {
    if (taskPreviousValue !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, taskPreviousValue])

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

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id)

    setTasks(updatedTasks)
  }

  function handleDeleteAllCompletedTasks() {
    const updatedTasks = tasks.filter(task => task.isCompleted === false)

    setTasks(updatedTasks)
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
        handleDeleteTask,
        handleDeleteAllCompletedTasks,
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
