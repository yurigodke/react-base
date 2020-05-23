import { LOADING, SETTOKEN, SETTOKENERROR } from "../constants.js";
import API from "../api";

const getToken = (email, pass) => async (dispatch, getState) => {
  dispatch({ type: LOADING });

  const api = new API();

  const loginResponse = await api.post("/login", {
    email,
    pass
  });

  if (loginResponse.status === 200) {
    dispatch({
      type: SETTOKEN,
      payload: loginResponse.data
    });
  } else {
    dispatch({
      type: SETTOKENERROR,
      payload: null
    });
  }
};

const clearToken = () => (dispatch, getState) => {
  dispatch({
    type: SETTOKEN,
    payload: {}
  });
};

export default {
  getToken,
  clearToken
};
