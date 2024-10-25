import { type ReactNode } from "react";
import { ToDoTask as ToDoTaskType } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import ToDoTask from "./ToDoTask.tsx";

type ToDoListProps = {
  tasks: ToDoTaskType[];
  onDeleteTask: (id: number) => void;
};

export default function ToDoList({
  tasks,
  onDeleteTask,
}: ToDoListProps): JSX.Element {
  if (tasks.length === 0) {
    return <InfoBox mode="hint"> You have no tasks yet.</InfoBox>;
  }

  let warningBox: ReactNode;
  if (tasks.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        {" "}
        You have too much tasks. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <ToDoTask id={task.id} title={task.title} onDelete={onDeleteTask}>
              <p>{task.description} </p>
            </ToDoTask>
          </li>
        ))}
      </ul>
    </>
  );
}
