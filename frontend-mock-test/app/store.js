import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/authSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persist-key',
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer
  }
});

const persistor = persistStore(store);

export { persistor };