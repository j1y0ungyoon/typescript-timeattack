import React from "react";
import "../App.css";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  isActive: boolean;
}

function TodoList({ todos, setTodos, isActive }: TodoListProps) {
  return (
    <div className="todolist">
      <h3>{isActive === true ? "👊TO DO👊" : "👏DONE👏"}</h3>

      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos} />;
        })}
    </div>
  );
}
export default TodoList;
