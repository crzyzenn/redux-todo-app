import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);

  const renderTasks = tasks.map(({ id, status, name }) => (
    <TodoCard key={id} id={id} status={status} taskName={name} />
  ));

  return <div>{renderTasks}</div>;
}
