const initialState = {
  participantWallet: ''
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PARTICIPANT_WALLET":
      return {
        ...state,
        participantWallet: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
