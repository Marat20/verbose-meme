import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { uiReducer } from 'features/UI';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from '../config/StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
  };
  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = { api: $api };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: extraArg },
      }),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
