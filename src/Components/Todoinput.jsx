import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "./Hook";
import { addTodo } from "../Redux/action";
const Todoinput = () => {
  const dispatch = useDispatch();

  //   console.log(todos);
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      task: "",
      date: "",
      time: "",
    },
    (formData) => {
      //   console.log(formData);
      let payload = {
        ...formData,
        isCompleted: false,
        id: uuidv4(),
      };
      dispatch(addTodo(payload));
      console.log("hello");
    }
  );

  const { task, date, time } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        type="date"
        name="date"
        value={date}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        type="time"
        name="time"
        value={time}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Todoinput;
