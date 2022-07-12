import React from "react";
import styled from "styled-components";
const Inputtag = styled.input`
  min-width: 200px;
  min-height: 40px;
`;
const Input = ({ type, name, value, onChange }) => {
  return (
    <>
      <Inputtag
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={true}
      />
    </>
  );
};

export default Input;
