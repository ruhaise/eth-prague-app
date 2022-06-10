import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background: #000;
  border-radius: 8px;
  border: 1px solid #FFFFFF;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  padding: 8px 16px;
  width: 146px;

  &:hover {
    background: #333;
    transition: .2s;
  }

  &:disabled {
    background: #000;
    cursor: default;
  }
`;

const StyledImage = styled.img`
  margin-right: 6px;
`;

const StyledChevron = styled.img`
  margin-left: 26px;
`;

const ConnectWallet = () => {
  return (
    <StyledButton disabled={true}>
      <StyledImage src={require('../assets/images/EthereumSVG.svg').default}/>
      Ethereum
      <StyledChevron src={require('../assets/images/Chevron.svg').default}/>
    </StyledButton>
  );
};

export default ConnectWallet;
