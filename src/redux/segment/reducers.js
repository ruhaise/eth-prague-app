const initialState = {
  segment_elements: [],
};

const segmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEGMENT_ELEMENTS":
      return {
        ...state,
        segment_elements: action.payload,
      };
    default:
      return state;
  }
};

export default segmentReducer;
