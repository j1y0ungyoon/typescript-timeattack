interface TodoProps {
  item: TodoItem;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  isActive: boolean;
}

const Todo = ({ item, isActive, setTodos }: TodoProps) => {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div className="card">
      <h5>{item.title}</h5>
      <h5>{item.contents}</h5>
      <div className="btns">
        <button onClick={handleSwitchButtonClick}>
          {isActive ? "DONE" : "CANCLE"}
        </button>

        <button onClick={handleDeleteButtonClick}>DELETE</button>
      </div>
    </div>
  );
};
export default Todo;
