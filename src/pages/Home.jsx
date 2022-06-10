import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #000000;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 63px;
    text-align: center;
    max-width: 500px;
    margin-top: 68px;
  }

  p {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    text-align: center;
    line-height: 33px;
    margin-top: 29px;
    max-width: 570px;

    strong {
      font-weight: 700;
    }
  }
`;

const StyledImage = styled.img`
  width: 80vw;
  margin-top: 81px;
  max-width: 1134px;
  margin-left: -4vw;
`;

const StyledDescriptionsContainer = styled.div`
  display: flex;
  max-width: 1260px;
  width: 92vw;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 81px;

  p {
    color: #717171;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    max-width: 345px;
    text-align: center;
    width: 33%;
  }
`;

const Home = () => {
  return (
    <StyledContainer>
      <h1>Here one example of what you can do:</h1>
      <p>
        <span><strong>Build your specific audience and interact with them.</strong></span>
        <span>Imagine that you want airdrop a new NFT or Token to a specific Web3 audience:</span>
      </p>
      <StyledImage src={require('../assets/images/HomeImages.png').default}/>
      <StyledDescriptionsContainer>
        <p>You want to airdrop a token for wallets who hold a Bored Ape NFT + that also hold an Azuki NFT</p>
        <p>+ addresses that have at least 1 ETH on their wallet (crossed specific segment)</p>
        <p>Get the list of wallets that match your specific segment. You can also act on specific segments like Airdrop an NFT, Token or POAP</p>
      </StyledDescriptionsContainer>
    </StyledContainer>
  );
}

export default Home;
