import { useState } from "react";

function TodoListCard() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTaskList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setTaskList((prevData) => [...prevData, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const closeHandler = (index) => {
    let taskArr = [...taskList];
    taskArr.splice(index, 1);
    setTaskList(taskArr);
  };

  const btnDisabled = () => {
    return (title && desc) === "" ? true : false;
  };

  return (
    <>
      <div className="card shadow-sm p-2">
        <div className="card-body d-flex flex-column gap-4">
          <h3 className="mb-0">Tasks⌛</h3>
          <form onSubmit={submitHandler}>
            <div className="d-flex flex-row flex-wrap flex-lg-nowrap gap-4">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></input>
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Description"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              ></input>
              <button
                className="btn btn-warning w-50"
                type="submit"
                disabled={btnDisabled()}
              >
                Add task
              </button>
            </div>
          </form>
          {taskList.map((item, index) => (
            <div key={index}>
              <div
                className="toast mb-3 w-100 shadow-none d-inline-block"
                role="alert"
                aria-atomic="true"
              >
                <div className="toast-header bg-light">
                  <strong className="me-auto fs-6">{item.title}</strong>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => closeHandler(index)}
                  ></button>
                </div>
                <div className="toast-body fs-6">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoListCard;
