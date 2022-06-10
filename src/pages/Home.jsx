import React, { useEffect } from "react";
import { walletConnect } from '../redux/blockchain/actions';

const Home = () => {
  useEffect(() => {
    dispatch(walletConnect());
  }, []);

  return (
    <>Here will be our app</>
  );
}

export default Home;
