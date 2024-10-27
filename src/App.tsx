import { useEffect, useState } from "react";
import todoListImg from "./assets/todo-icon.jpg";
import Header from "./components/Header.tsx";
import NewTask from "./components/NewTask.tsx";
import ToDoList from "./components/ToDoList.tsx";

export type ToDoTask = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [tasks, setTasks] = useState<ToDoTask[]>([]); // array of tasks

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  function handleAddTask(task: string, summary: string) {
    const newTask: ToDoTask = {
      id: Math.random(),
      title: task,
      description: summary,
    };

    // Update tasks in localStorage
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Update state with the new task
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: number) {
    deleteTaskFromLocalStorage(id);
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  // Delete task from localStorage
  function deleteTaskFromLocalStorage(id: number) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task: ToDoTask) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <main>
      <Header image={{ src: todoListImg, alt: "A list of goals" }}>
        <h1> ToDo list</h1>
      </Header>
      <NewTask onAddTask={handleAddTask} />
      <ToDoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
}
