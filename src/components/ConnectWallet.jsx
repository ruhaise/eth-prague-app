import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { walletConnect } from '../redux/blockchain/actions';
import { formatWalletAddress } from '../utils/formatWalletAddress';

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

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector(state => state.blockchain.account);

  if (!walletAddress) {
    return <StyledButton onClick={() => dispatch(walletConnect())}>Connect Wallet</StyledButton>
  }

  return <StyledButton disabled={true}>{formatWalletAddress(walletAddress)}</StyledButton>;
};

export default ConnectWallet;
