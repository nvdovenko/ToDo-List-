import { useRef, type FormEvent } from "react";

type NewTaskProps = {
  onAddTask: (task: string, summary: string) => void;
};

export default function NewTask({ onAddTask }: NewTaskProps) {
  const task = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredTask = task.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddTask(enteredTask, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task">Task</label>
        <input id="task" type="text" ref={task} />

        <label htmlFor="summary">Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add task</button>
      </p>
    </form>
  );
}
