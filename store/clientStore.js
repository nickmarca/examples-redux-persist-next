import { createStore } from 'redux';
import reducers from "../reducers/index";
import storage from "localforage";
import {persistStore, persistReducer} from "redux-persist";
import {loadSuccess} from "../actions";

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default (initialState) => {
  const store = createStore(persistedReducer, initialState);

  setTimeout(() => {
    persistStore(store, null, () => {
      store.dispatch(loadSuccess());
    });

    persistStore(store);

  }, 3000);

  return store;
}