import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <h1>To do list </h1>
    </StHeader>
  );
}

const StHeader = styled.div`
  width: 100vw;
  height: 80px;
  background-color: bisque;
`;

export default Header;
