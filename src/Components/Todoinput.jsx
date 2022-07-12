import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "./Hooks/Form";
import { addTodo } from "../Redux/action";
import Input from "./Input";
const Todoinput = () => {
  const dispatch = useDispatch();
  var dateControl = document.querySelector('input[type="date"]');
  var timeControl = document.querySelector('input[type="time"]');

  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      task: "",
      date: "",
      time: "",
    },
    (formData) => {
      let payload = {
        ...formData,
        totaltimeinms: dateControl.valueAsNumber + timeControl.valueAsNumber,
        registertime: new Date().getTime(),
        isCompleted: false,
        id: uuidv4(),
      };
      dispatch(addTodo(payload));
    }
  );

  const { task, date, time } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={"text"}
        name={"task"}
        value={task}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <Input
        type={"date"}
        name={"date"}
        value={date}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <Input
        type={"time"}
        name={"time"}
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
