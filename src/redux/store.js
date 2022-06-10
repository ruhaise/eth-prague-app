import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/reducers";
import generalReducer from "./general/reducers";
import smartContractReducer from "./smart-contract/reducers";
import segmentReducer from "./segment/reducers";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  general: generalReducer,
  smartContract: smartContractReducer,
  segment: segmentReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
