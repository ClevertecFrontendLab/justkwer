import { configureStore } from '@reduxjs/toolkit';
import { form } from '@store/reducers/form';

export const store = configureStore({
  reducer: {
    form,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
