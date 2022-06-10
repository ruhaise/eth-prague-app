export const saveSegment = (payload) => {
  return {
    type: "SET_SEGMENT_ELEMENTS",
    payload,
  };
};

export const setGraphTokens = (payload) => {
  return {
    type: "SET_GRAPH_TOKENS",
    payload,
  };
};
