import TodoListCard from "./TodoListCard";

function TodoList() {
  return (
    <>
      <div className="d-flex flex-row justify-content-evenly flex-wrap gap-5 m-5 py-3">
        <div>
          <h2 className="fw-bold">Todo List📜</h2>
          <h3 className="text-secondary" style={{ maxWidth: "700px" }}>
            "Your to-do list is a roadmap to success and each task checked off
            is a step closer to your goals.👍"
          </h3>
        </div>
        <div>
          <TodoListCard />
        </div>
      </div>
    </>
  );
}

export default TodoList;
