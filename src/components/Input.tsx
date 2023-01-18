import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

interface InputProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Input = ({ setTodos }: InputProps) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title) {
      return alert(" 제목을 입력해주세요!");
    }
    if (!contents) {
      return alert(" 내용을 입력해주세요!");
    }

    const newTodo: TodoItem = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTitle("");
    setContents("");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        TITLE:
        <input placeholder="title" value={title} onChange={handleTitleChange} />
        CONTENT:
        <input
          onChange={handleContentsChange}
          placeholder="content"
          value={contents}
        />
        <button>ADD</button>
      </form>
    </section>
  );
};
export default Input;
