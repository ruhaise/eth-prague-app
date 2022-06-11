import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;

  div {
    display: grid;
    font-size: 20px;
    padding: 0 15px;
    line-height: 36px;
    max-width: 530px;
    width: 80%;
    grid-template-columns: 1fr auto;

    span:first-child {
      justify-self: start;
      color: #B1B1B1;
      font-weight: 700;
    }

    span:last-child {
      cursor: pointer;
    }

    &:hover {
      background-color:rgba(255, 255, 255, 0.7);
      border-radius: 6px;
    }
  }
`

const List = ({tokens}) => {
  return (
    <StyledContainer>
      {tokens?.map((token, index) => (
        <div key={token}>
          <span>{index}</span>
          <span>{token}</span>
        </div>
      ))}
    </StyledContainer>
  );
}

export default List;
