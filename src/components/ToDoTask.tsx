import { type PropsWithChildren } from "react";

export type TaskProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function ToDoTask({ id, title, children, onDelete }: TaskProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button onClick={() => onDelete(id)}> Delete</button>
      </div>
    </article>
  );
}
