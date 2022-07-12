import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../Redux/action";
import Th from "./Th";
import Timer from "./Timer";
const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const handleToggle = (id) => {
    let updatedtodo = todos.map((eachtodo) =>
      eachtodo.id === id
        ? { ...eachtodo, isCompleted: !eachtodo.isCompleted }
        : eachtodo
    );

    dispatch(toggleTodo(updatedtodo));
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
            <tr key={each.id}>
              <Th>{each.task}</Th>

              {each.isCompleted === false ? (
                <Th>Not Done</Th>
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

              <th onClick={() => handleToggle(each.id)}>Toggle</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
