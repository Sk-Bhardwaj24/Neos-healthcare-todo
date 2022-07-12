import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../Redux/action";
const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

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
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
            <th>Time Left</th>
          </tr>
        </thead>
        <tbody>
          {console.log(todos)}
          {todos.map((each) => (
            <tr key={each.id}>
              <th>{each.task}</th>
              {each.isCompleted === false ? (
                <th>Not Done</th>
              ) : (
                <th>complete</th>
              )}

              <th onClick={() => handleToggle(each.id)}>Toggle</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
