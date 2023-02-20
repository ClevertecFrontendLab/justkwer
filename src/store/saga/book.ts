import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '@core/api';
import { BookItem } from '@core/types';
import { addBook, getApiBook } from '@store/reducers/book';
import { toggleError } from '@store/reducers/books';
import { AxiosResponse } from 'axios';

export function* getBookWorker(action: { payload: string }) {
  try {
    const { data }: AxiosResponse<BookItem> = yield call(api.get, `/api/books/${action.payload ?? '5'}`);

    yield put(addBook(data));
  } catch {
    yield put(toggleError(true));
  }
}

export function* getBookWatcher() {
  yield takeEvery(getApiBook, getBookWorker);
}
