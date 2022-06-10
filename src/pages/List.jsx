import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-top: 5px;

    &:first-child {
      margin-top: 40px; 
    }
  }
`

const List = ({tokens}) => {
  return (
    <StyledContainer>
      {tokens?.map(token => <span>{token.owner.id}</span>)}
    </StyledContainer>
  );
}

export default List;
