import React from "react";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";
import Header from "../assets/images/Header.png";
import HowItWorks from "../assets/images/HowitWorks.png";
import Homebottom from "../assets/images/Homebottom.png";

const StyledWrapper = styled.div`
  widht: 100%;
  height: 100%;
`;
const StyledWraperTop = styled.div`
  background-image: url("${Header}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 124px;
`;

const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 63px;
  color: white;
`;

const StyledTextWrapper = styled.div`
  width: 50%;
`;

const StyledParagraph = styled.p`
  color: white;
  margin: 38px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
`;

const StyledMediumWrapper = styled.div`
  background-image: url("${HowItWorks}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
`;

const StyledBottomWrapper = styled.div`
  background-image: url("${Homebottom}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <StyledWraperTop>
        <StyledTextWrapper>
          <StyledHeader>
            Smooth interactions with your Web 3.0 community
          </StyledHeader>
          <StyledParagraph>
            A tool that allows you to segment wallet addresses and communicate
            with specific audiences
          </StyledParagraph>
          <ConnectWallet />
        </StyledTextWrapper>
        <StyledTextWrapper></StyledTextWrapper>
      </StyledWraperTop>

      <StyledMediumWrapper></StyledMediumWrapper>
      <StyledBottomWrapper></StyledBottomWrapper>
    </StyledWrapper>
  );
};

export default Home;
