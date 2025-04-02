import { configureStore } from '@reduxjs/toolkit';
import { Apis } from '../Apis/Apis';
import authReducer from '../Apis/authSlice'
import UserApi from '../Apis/UserApi';


export const Store = configureStore({
  reducer: {
    auth: authReducer,
    [Apis.reducerPath]: Apis.reducer,
    [UserApi.reducerPath]: UserApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apis.middleware, UserApi.middleware),
});

export default Store