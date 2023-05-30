import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import viewSort from '../features/globalSlice/headerSlice';
import languagesReducer from '../features/languages/languagesSlice';
import formSlice from '../features/DishForm/slice';
export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    view: viewSort,
    languages: languagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
