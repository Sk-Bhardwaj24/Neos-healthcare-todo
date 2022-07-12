import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../Redux/action";
import Th from "./Th";
import Timer from "./Timer";
const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  // const [isvalid,setvalid]=React.useState(true);

  const handleToggle = (id, time, isCompleted) => {
    if (time - 19800000 - new Date().getTime() <= 0) {
      return alert("You are late, wish you good luck ahead");
    } else {
      let data = isCompleted ? "Not completed" : "completed";
      let status = window.confirm(`Have You ${data} this task`);
      if (status) {
        let updatedtodo = todos.map((eachtodo) =>
          eachtodo.id === id
            ? { ...eachtodo, isCompleted: !eachtodo.isCompleted }
            : eachtodo
        );

        dispatch(toggleTodo(updatedtodo));
      }
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <Th>Task</Th>
            <Th>Status</Th>
            <Th>Time Left</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {todos.map((each) => (
            <tr key={each.id} style={{ border: "1px solid black" }}>
              <Th>{each.task}</Th>

              {each.isCompleted === false ? (
                <Th>
                  <p style={{ color: "red" }}>Not Done</p>
                </Th>
              ) : (
                <Th>complete</Th>
              )}
              <Th>
                <Timer
                  time={each.totaltimeinms}
                  registertime={each.registertime}
                  id={each.id}
                />
              </Th>

              <th
                style={{ border: "1px solid black", cursor: "pointer" }}
                onClick={() =>
                  handleToggle(each.id, each.totaltimeinms, each.isCompleted)
                }
              >
                {" "}
                Toggle
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
