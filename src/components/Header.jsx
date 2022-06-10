import { useDispatch, useSelector } from "react-redux";
import { walletConnect } from '../redux/blockchain/actions';

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
    <div>
      <span>{title}</span>
      <ConnectWallet />
    </div>
  );
};

export default Header;