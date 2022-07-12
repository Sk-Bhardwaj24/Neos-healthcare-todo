import React from "react";
import styled from "styled-components";
const Thstyle = styled.th`
  width: 300px;
  height: 100px;
  border: 1px solid black;
`;
const Th = ({ children }) => {
  return <Thstyle>{children}</Thstyle>;
};

export default Th;
