import { createStore, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

let storage = null;
if (window.location) {
  try {
    storage = require("redux-persist/lib/storage").default;
  } catch (e) {}
} else {
  try {
    storage = require("@react-native-community/async-storage").default;
  } catch (e) {}
}

const persistConfig = {
  key: "userData",
  storage,
  whitelist: ["login", "user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  let store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
