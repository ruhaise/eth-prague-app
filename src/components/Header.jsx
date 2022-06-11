import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ConnectWallet from './ConnectWallet';
import SelectNetwork from './SelectNetwork';

const StyledHeader = styled(AppBar)`
  background-color: #000;
  font-family: 'Roboto', sans-serif;
  font-style: normal;

  > div {
    background-color: #000;
    display: flex;
    width: 100%;
    justify-content: space-between;

    div {
      display: flex;

      a {
        color: #FFFFFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;

        @media screen and (max-width: 700px) {
          display: none;
        }

        &:after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #5D5FEF;
          transition: width .2s;
          margin-top: 2px;
        }
      
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`

const StyledLeftBlock = styled.div`
  justify-content: flex-start;
  gap: 32px;
`;

const StyledRightBlock = styled.div`
  justify-content: flex-end;
  gap: 5px;
`;

const Header = () => {
  return (
    <StyledHeader position="sticky">
      <Toolbar>
        <StyledLeftBlock>
          <Link to="/">Home</Link>
          <Link to="/segments">Create segments</Link>
        </StyledLeftBlock>
        <StyledRightBlock>
          <SelectNetwork />
          <ConnectWallet />
        </StyledRightBlock>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;