import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ConnectWallet from './ConnectWallet';

const StyledHeader = styled(AppBar)`
  background-color: #000;
  font-family: 'Roboto', sans-serif;
  font-style: normal;

  div {
    background-color: #000;
    display: flex;
    width: 100%;
    justify-content: flex-start;

    div {
      display: flex;
      gap: 32px;

      a {
        color: #FFFFFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader position="sticky">
      <Toolbar>
        <div>
          <Link to="/">Home</Link>
          <Link to="/segments">Manage segments</Link>
          <Link to="/list">List</Link>
          <Link to="/chat">Chat</Link>
        </div>
        <ConnectWallet />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;