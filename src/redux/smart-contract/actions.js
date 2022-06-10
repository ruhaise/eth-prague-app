import Web3EthContract from "web3-eth-contract";
import { walletConnectSuccess, walletConnectError } from '../blockchain/actions';
import store from "../store";
import { getGasPrice } from '../../utils/getGasPrice';

const SMART_CONTRACT_ABI = require('../../config/abi.json');

const connectSmartContractRequest = () => {
  return {
    type: "CONNECT_SMART_CONTRACT_REQUEST",
  };
};

const connectSmartContractSuccess = (payload) => {
  return {
    type: "CONNECT_SMART_CONTRACT_SUCCESS",
    payload: payload,
  };
};

const connectSmartContractError = (payload) => {
  return {
    type: "CONNECT_SMART_CONTRACT_ERROR",
    payload: payload,
  };
};

const mintRequest = () => {
  return {
    type: "MINT_REQUEST"
  };
};

const mintSuccess = () => {
  return {
    type: "MINT_SUCCESS"
  };
};

const mintError = (payload) => {
  return {
    type: "MINT_ERROR",
    payload: payload
  };
};

export const mintReset = () => {
  return {
    type: "MINT_RESET"
  };
};

export const connectToContract = () => {
  return async (dispatch) => {
    dispatch(connectSmartContractRequest())
    const { ethereum } = window;
    const {
      REACT_APP_NETWORK_NAME: chainName,
      REACT_APP_NETWORK_CURRENCY_SYMBOL: symbol,
      REACT_APP_NETWORK_ID_HEX: chainId,
      REACT_APP_NETWORK_CURRENCY_DECIMAL: decimals,
      REACT_APP_NETWORK_CURRENCY_NAME: name,
      REACT_APP_NETWORK_RPC_URL: rpcUrl,
      REACT_APP_NETWORK_BLOCK_EXPLORER: blockExplorer
    } = process.env;

    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId,
          chainName,
          nativeCurrency: {
            name,
            symbol,
            decimals,
          },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: [blockExplorer],
        },
      ],
    });

    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);

      try {  
        let networkId = await ethereum.request({
          method: "net_version",
        });

        if (networkId != process.env.REACT_APP_NETWORK_ID) {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: process.env.REACT_APP_NETWORK_ID_HEX }],
          });

          networkId = await ethereum.request({
            method: "net_version",
          });
        }

        if (networkId == process.env.REACT_APP_NETWORK_ID) {
          const SmartContractObj = new Web3EthContract(SMART_CONTRACT_ABI, process.env.REACT_APP_CONTRACT_ADDRESS);

          dispatch(connectSmartContractSuccess(SmartContractObj));
          // Add listeners start
          ethereum.on("accountsChanged", (_accounts) => {
            const targetAccount = _accounts?.length ? _accounts[0] : "";

            dispatch(walletConnectSuccess(targetAccount));

            if (!targetAccount) {
              dispatch(walletConnectError('Error: wallet connect'));
            }
          });
          ethereum.on("chainChanged", (_networkId) => {
            if (_networkId != process.env.REACT_APP_NETWORK_ID) {
              window.location.reload();
            }
          });
          // Add listeners end
          //get the contract in redux
        } else {
          dispatch(connectSmartContractError(`Change network to ${chainName}.`));
        }
      } catch (err) {
        if (err?.message) {
          dispatch(connectSmartContractError(err.message));
        } else {
          dispatch(connectSmartContractError("Something went wrong."));
        }
      }
    }
  }
}

export const mint = () => {
  return async (dispatch) => {
    dispatch(mintRequest());
    const gasPrice = await getGasPrice();
    const gasLimit = process.env.REACT_APP_NETWORK_GAS_LIMIT;
    const smartContract = store.getState().smartContract.smartContract;
    const targetWalletId = store.getState().general.participantWallet;
    const adminWalletId = store.getState().blockchain.account;

    if (smartContract === null) {
      dispatch(mintError('No smart contract connected'));
      return;
    }

    await smartContract.methods.mintTo(targetWalletId)
      .send({
        gasPrice: String(gasPrice).split(".")[0],
        gasLimit: String(gasLimit).split(".")[0],
        to: targetWalletId,
        from: adminWalletId,
        value: '0',
      })
      .once("error", (err) => {
        if (err?.message) {
          dispatch(mintError(err?.message));
        } else {
          dispatch(mintError("Sorry, something went wrong please try again later."));
        }
      })
      .then(() => {
        dispatch(mintSuccess());
      });
  }
}
