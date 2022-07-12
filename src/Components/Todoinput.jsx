import React from "react";
import { useForm } from "./Hook";
const Todoinput = () => {
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      task: "",
      date: "",
      time: "",
    },
    (formData) => {
      console.log(formData);
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
