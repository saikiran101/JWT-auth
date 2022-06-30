import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import detailReducer from '../features/details/detailSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    detail:detailReducer,
  },
});
