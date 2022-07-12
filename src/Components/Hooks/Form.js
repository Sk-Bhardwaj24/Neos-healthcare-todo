import React from "react";
export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e) => {
    // const {name,value,type,valueAsNumber}=e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
