import axios from "axios";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { saveSegment, setGraphTokens } from "../redux/segment/actions";
import List from "./List";

const StyledWrapper = styled.div`
  background: #f0f0f0;
  text-align: center;
  display: flex;
`;

const StyledInputsWrapper = styled.div`
  margin: auto;
  max-width: 500px;
  display: flex;
  margin-bottom: 15px;

  &:first-child > div:last-child {
    display: none;
  }

  &:not(:first-child) > div:first-child {
    width: 80%;
  }
`;
const StyledInputsRemove = styled.div`
  width: 40px;
  align-self: flex-end;
  margin-left: 10px;
`;

const StyledButtonAdd = styled(Button)`
  border: 3px dashed #c4c4c4 !important;
  border-radius: 16px !important;
  background: transparent !important;
  outline: none !important;
  box-shadow: none !important;
  color: #b1b1b1 !important;
  display: flex !important;
  justify-content: space-between !important;
  width: 100% !important;
  align-items: center !important;
  padding: 12px 15px !important;
  cursor: pointer !important;
  margin-bottom: 25px !important;
`;

const StyledButtonSend = styled(Button)`
  background: #5d5fef !important;
  border-radius: 8px !important;
  width: 100% !important;
  height: 58px !important;
  color: #fff !important;
  font-weight: 700 !important;

  span {
    font-size: 14px !important;

    &:last-child {
      margin-left: 13px !important;
    }
  }
`;

const StyledAddIcon = styled.img``;

const StyledSearchIcon = styled.img``;

const StyledInputsoutWrapp = styled.div`
  margin-bottom: 30px;
`;

const StyledButtonsWrapper = styled.div`
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledLeftContainer = styled.div`
  width: 35vw;
`;

const StyledRightContainer = styled.div`
  width: 65vw;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledInputsImage = styled.img`
  width: 35%;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const StyledBR = styled.div`
  background: #d0d0d0;
  height: 1px;
  margin-bottom: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 90%;
`;

const Segment = () => {
  const dispatch = useDispatch();
  const [tokens, setTokens] = useState([]);
  const [segmentQuery, setSegmentQuery] = useState([{ contract_address: "" }]);

  const handleFetchGQL = async (segmentQuery) => {
    try {
      if (segmentQuery.length > 1) {
        const [walletAddresses1, walletAddresses2] = await Promise.all([
          fetchWalletsBasedOnContract(segmentQuery[0].contract_address),
          fetchWalletsBasedOnContract(segmentQuery[1].contract_address),
        ]);

        const uniqueWallets = walletAddresses1.filter((value) =>
          walletAddresses2.includes(value)
        );

        setTokens(uniqueWallets);
      } else {
        const walletAddresses = await fetchWalletsBasedOnContract(
          segmentQuery[0].contract_address
        );

        setGraphTokens(walletAddresses);
        setTokens(walletAddresses);
      }
    } catch (err) {
      console.error("Graph [error]: ", err);
    }
  };

  const fetchWalletsBasedOnContract = async (contract_address) => {
    try {
      const payload = `{\n  tokens(first: 1000,where: {\n    collection: \"${contract_address}\",\n  }) {\n    owner {\n      id\n    }\n  }\n}`;
      const data = await axios.post(
        `https://gateway.thegraph.com/api/2d3d83f6c8345633d0dce29d41068a6b/subgraphs/id/B333F7Ra4kuVBSwHFDfH9x9N1341GYHvdfpV94KY8Gmv`,
        { query: payload }
      );

      const wallets = data?.data?.data?.tokens.map((token) => token.owner.id);

      return wallets;
    } catch (err) {
      console.error("Graph [error]: ", err);
    }
  };

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

    handleFetchGQL(segmentQuery);
  };

  return (
    <StyledWrapper>
      <StyledLeftContainer>
        <StyledImage
          src={require("../assets/images/SegmentBlocks.png").default}
        />
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledInputsImage
          src={require("../assets/images/CreateYourSegment.png").default}
        />
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
          <StyledButtonAdd
            onClick={handleAddSegment}
            disabled={segmentQuery.length > 1}
            color="primary"
            variant="contained"
            size="large"
          >
            <span>Add more segment blocks</span>
            <StyledAddIcon
              src={require("../assets/images/AddIcon.svg").default}
            />
          </StyledButtonAdd>

          <StyledButtonSend
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            <StyledSearchIcon
              src={require("../assets/images/SearchIcon.svg").default}
            />
            <span>Search wallet addresses that match this segment</span>
          </StyledButtonSend>
        </StyledButtonsWrapper>
        {tokens?.length ? <StyledBR /> : null}
        <List tokens={tokens} />
      </StyledRightContainer>
    </StyledWrapper>
  );
};

export default Segment;
