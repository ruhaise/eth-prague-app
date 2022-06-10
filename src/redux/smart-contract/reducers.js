const initialState = {
  smartContract: null,
  loading: false,
  error: false,
  errorMsg: '',
  mint: {
    loading: false,
    success: false,
    error: ''
  }
};

const smartContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECT_SMART_CONTRACT_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECT_SMART_CONTRACT_SUCCESS":
      return {
        ...initialState,
        smartContract: action.payload
      };
    case "CONNECT_SMART_CONTRACT_ERROR":
      return {
        ...initialState,
        error: true,
        errorMsg: action.payload,
      };
    case "MINT_REQUEST":
      return {
        ...state,
        mint: {
          loading: true,
          success: false,
          error: ''
        }
      };
    case "MINT_SUCCESS":
      return {
        ...state,
        mint: {
          loading: false,
          success: true,
          error: ''
        }
      };
    case "MINT_ERROR":
      return {
        ...state,
        mint: {
          loading: false,
          success: false,
          error: action.payload
        }
      };
    case "MINT_RESET":
      return {
        ...state,
        mint: {
          ...initialState.mint
        }
      };
    default:
      return state;
  }
};

export default smartContractReducer;
