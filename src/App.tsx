import { useState } from "react";
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

  function handleAddTask(task: string, summary: string) {
    setTasks((prevTasks) => {
      const newTask: ToDoTask = {
        id: Math.random(),
        title: task,
        description: summary,
      };
      return [...prevTasks, newTask];
    });
  }

  function handleDeleteTask(id: number) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
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
