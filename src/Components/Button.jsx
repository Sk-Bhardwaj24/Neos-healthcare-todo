import React from "react";
import styled from "styled-components";
const Buttoncomponents = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: black;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const Button = ({ type, children }) => {
  return <Buttoncomponents onSubmit={type}>{children}</Buttoncomponents>;
};

export default Button;
