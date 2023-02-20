import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { book, books, form } from '@store/reducers';
import { addBooksWatcher, getBookWatcher } from '@store/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    form,
    books,
    book,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(addBooksWatcher);
sagaMiddleware.run(getBookWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
