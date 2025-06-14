import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';

export const store = configureStore({ middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: createAPI() } }), reducer: reducer });
