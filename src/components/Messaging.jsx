import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import Android from "../assets/images/Android.png";
import Poap from "../assets/images/Poap.png";
import Blockchain from "../assets/images/Blockchain.png";
import Vector from "../assets/images/Vector.png";
import { Button, TextField } from "@material-ui/core";
//import ResHanlder from "./ResHanlder";

const demoSegmentWallets = [
  "0xfdE2b5B1eB59A58e168736c6EF68b9bA7b4e0C13",
  "0x2Ab135c81793Fa686bAA60361B3352dE9b251Cc6",
  "0x330D7Ac5f24dC3570c2afe3F3a57D9C66e0795e8",
  "0xC89f29B1b0dAC3B1ffEb29c648be74D4E559C97D",
  "0x330D7Ac5f24dC3570c2afe3F3a57D9C66e0795e8",
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 90%;
  width: 700px;
  padding: 35px 0;
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 30px;
  color: #5d5fef;
  line-height: 40px;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 5px 0 34px 0;
`;

const StyledImage = styled.img`
  width: 35%;
`;

const StyledMessageBlock = styled.div`
  background: #fff;
  text-align: left;
`;

const StyledMessageHeader = styled.div`
  display: flex;
  background-color: #ffc1c1;
  color: #c64242;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  padding: 10px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const StyledMessagebody = styled.div`
  padding: 10px;
  padding-bottom: 35px;
  p {
    font-weight: 400;
    font-size: 14px;
    color: #989898;
    line-height: 140%;
    padding: 10px 0;
  }
`;

const StyledTitleText = styled.h1`
  padding-top: 40px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 35px;
`;

const Messaging = () => {
  const [showRes, setshowRes] = useState(false);
  const [msg, setMsg] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [statusCode, setStatusCode] = useState("");

  const handleSendingMessage = async () => {
    try {
      const responseData = await axios.post(
        `http://localhost:4000/sendchat`,

        {
          data: {
            addresses: demoSegmentWallets,
            // apiKey: "tnEwufdqXBabbMfJfur4tbx2VYFsL2NIAR2ChT2hBykTtBm28IYHhD",
            apiKey: apiKey,
            message: msg,
          },
        }
      );
      console.log("response data", responseData);
    } catch (err) {
      console.error("Error Sending Message ", err);
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>Act on segment</StyledTitle>
      <StyledImagesContainer>
        <StyledImage src={Blockchain}></StyledImage>
        <StyledImage src={Android}></StyledImage>
        <StyledImage src={Poap}></StyledImage>
      </StyledImagesContainer>
      <StyledMessageBlock>
        <StyledMessageHeader>
          <img src={Vector}></img>
          <p>
            Be ethical, don't use this tool to spam the Web3 community. Stay
            Pure. WAGMI
          </p>
        </StyledMessageHeader>
        <StyledMessagebody>
          <StyledTitleText>Blockscan API Key</StyledTitleText>

          <TextField
            required
            label="Enter API Key."
            name="api_key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            fullWidth
          />
          <StyledTitleText>Message Wallets</StyledTitleText>
          <p>Message should have maximum 420 characters</p>
          <TextField
            required
            label="Type message here"
            name="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            multiline
            rows={4}
            variant="filled"
            fullWidth
          />
          <StyledButtonWrapper>
            <Button
              onClick={() => handleSendingMessage()}
              color="primary"
              variant="contained"
              size="large"
            >
              Send it!
            </Button>
          </StyledButtonWrapper>
        </StyledMessagebody>
      </StyledMessageBlock>
    </StyledWrapper>
  );
};

export default Messaging;
