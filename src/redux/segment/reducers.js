const initialState = {
  segment_elements: [],
  graph_tokens: [],
};

const segmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEGMENT_ELEMENTS":
      return {
        ...state,
        segment_elements: action.payload,
      };
    case "SET_GRAPH_TOKENS":
      return {
        ...state,
        graph_tokens: action.payload,
      };
    default:
      return state;
  }
};

export default segmentReducer;
