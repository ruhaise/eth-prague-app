import { useMoralis } from "react-moralis";
import styled from "styled-components";
import { formatWalletAddress } from "../utils/formatWalletAddress";

const StyledButton = styled.button`
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  padding: 8px 16px;
  width: 146px;

  &:hover {
    background: #4bb5c5;
    transition: 0.2s;
  }

  &:disabled {
    background: #fff;
    cursor: default;
  }
`;

const ConnectWallet = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const walletAddress = user?.get("ethAddress");

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate()
        .then(function (user) {
          console.log(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  console.log("walletAddress", walletAddress);

  if (!walletAddress) {
    return (
      <StyledButton onClick={() => handleLogin()}>Connect Wallet</StyledButton>
    );
  }

  return (
    <StyledButton disabled={true}>
      {formatWalletAddress(walletAddress)}
    </StyledButton>
  );
};

export default ConnectWallet;
