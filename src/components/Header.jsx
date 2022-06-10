import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { walletConnect } from '../redux/blockchain/actions';

const StyledHeader = styled(AppBar)`
  backgroundColor: "#400CCC",
`

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector(state => state.blockchain.account);

  if (!walletAddress) {
    return <button onClick={() => dispatch(walletConnect())}>Connect Wallet</button>
  }

  return <span>{walletAddress}</span>;
};

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Toolbar>
        <Typography variant="h6" component="h1">{title}</Typography>
        <ConnectWallet />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;