import { SETTOKEN, SETTOKENERROR } from "../constants.js";

import { combineReducers } from "redux";

const tokenData = (state = null, { type, payload }) => {
  switch (type) {
    case SETTOKEN:
    case SETTOKENERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ tokenData });
