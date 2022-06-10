const initialState = {
  loading: false,
  account: null,
  error: '',
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WALLET_CONNECT_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "WALLET_CONNECT_SUCCESS":
      return {
        ...initialState,
        account: action.payload,
      };
    case "WALLET_CONNECT_ERROR":
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
