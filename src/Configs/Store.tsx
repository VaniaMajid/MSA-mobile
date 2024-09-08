import {Action, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {ThunkAction} from 'redux-thunk';
import {MMKVStorage} from './MMKVStore';
import rootReducer from './Reducer';
export type RootReducer = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  blacklist: [''],
};

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

const createDebugger = require('redux-flipper').default;

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
