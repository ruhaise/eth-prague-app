export const walletConnectRequest = () => {
  return {
    type: "WALLET_CONNECT_REQUEST",
  };
};

export const walletConnectSuccess = (payload) => {
  return {
    type: "WALLET_CONNECT_SUCCESS",
    payload: payload,
  };
};

export const walletConnectError = (payload) => {
  return {
    type: "WALLET_CONNECT_ERROR",
    payload: payload,
  };
};

export const walletConnect = () => {
  return async (dispatch) => {
    try {
      dispatch(walletConnectRequest());
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((data) => {
          if (data?.[0]) {
            dispatch(walletConnectSuccess(data[0]));
          }
        })
    } catch (err) {
      dispatch(walletConnectError('Error: wallet connect'));
    }
  };
};
