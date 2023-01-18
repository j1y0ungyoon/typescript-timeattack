import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

const initialState: TodoItem[] = [
  {
    title: "리액트 조지기",
    contents: "하지만 조져지는건 나였다.",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "놀기",
    contents: "오늘도 딴짓하기?",
    isDone: true,
    id: uuidv4(),
  },
];

const App = () => {
  //todos: todo라는 객체를 여러개 가지고 있는 배열
  const [todos, setTodos] = useState<TodoItem[]>(initialState);
  return (
    <>
      <Header />
      <main className="main">
        <Input setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
};

export default App;
