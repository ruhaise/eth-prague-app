import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { saveSegment } from "../redux/segment/actions";

const StyledWrapper = styled.div`
  text-align: center;
  padding: 24px;
`;

const StyledInputsWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 500px;
  display: flex;
  margin-bottom: 15px;
`;
const StyledInputsRemove = styled.div`
  width: 40px;
  align-self: flex-end;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  width: 200px;
`;

const StyledInputsoutWrapp = styled.div`
  margin-bottom: 30px;
`;

const StyledButtonsWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
`;
const Segment = () => {
  const [segmentQuery, setSegmentQuery] = useState([{ contract_address: "" }]);

  const dispatch = useDispatch();

  const handleAddSegment = () => {
    setSegmentQuery([...segmentQuery, { contract_address: "" }]);
  };

  const handleRemoveSegment = (index) => {
    const segmentList = [...segmentQuery];
    segmentList.splice(index, 1);
    setSegmentQuery(segmentList);
  };

  const handleSegmentChange = (index, e) => {
    const { name, value } = e.target;
    const segmentList = [...segmentQuery];
    segmentList[index][name] = value;
    setSegmentQuery(segmentList);
  };

  const handleSubmit = () => {
    dispatch(saveSegment(segmentQuery));
  };

  return (
    <StyledWrapper>
      <StyledInputsoutWrapp>
        {segmentQuery.map((segment, index) => {
          return (
            <StyledInputsWrapper key={index}>
              {" "}
              <TextField
                required
                label="Contract address"
                name="contract_address"
                defaultValue="contract address"
                value={segment.contract_address}
                onChange={(e) => handleSegmentChange(index, e)}
                fullWidth
              />
              <StyledInputsRemove>
                {index > 0 && (
                  <Button
                    variant="outlined"
                    size="medium"
                    onClick={() => handleRemoveSegment(index)}
                    color="primary"
                  >
                    Remove
                  </Button>
                )}
              </StyledInputsRemove>
            </StyledInputsWrapper>
          );
        })}
      </StyledInputsoutWrapp>
      <StyledButtonsWrapper>
        <StyledButton
          onClick={handleAddSegment}
          disabled={segmentQuery.length > 4}
          color="primary"
          variant="contained"
          size="large"
        >
          Add +
        </StyledButton>

        <StyledButton onClick={handleSubmit} size="large" variant="contained">
          SEND
        </StyledButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
};

export default Segment;
