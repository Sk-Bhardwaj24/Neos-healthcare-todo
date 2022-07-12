import React from "react";
export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(onSubmit);
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
