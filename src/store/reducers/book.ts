import { BookItem, BookState } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GET_API_BOOK = 'getApiBook';

const initialState: BookState = {
  book: {
    id: 5,
    title: 'Жлобология. Откуда берутся деньги и почему не у меня',
    rating: null,
    issueYear: '2020',
    description:
      'Знали ли вы, что 70% самого бедного населения земного шара владеют всего тремя процентами мирового богатства? Немного обидно, правда? Если вы всю жизнь думаете: «Как же так? Почему все зарабатывают больше меня? Как им удается сэкономить больше с меньшей зарплатой?» - то эта книга точно для вас.\n\nПрочитав книгу, вы не выиграете в лотерею, вам не повысят зарплату и миллионную премию вы не получите. Но изучая реальные кейсы из «Жлобологии», вы действительно поймете, как стать богаче, ну или хотя бы умнее.',
    publish: 'Издательство Аст',
    pages: '320',
    cover: 'Твердый переплет',
    weight: '330',
    format: '84x108/32',
    ISBN: '978-5-17-114945-1',
    producer: 'ООО "Издательство АСТ"',
    authors: ['Алексей Марков'],
    images: [
      {
        url: '/uploads/10827932_0_b1fc6336fa.jpg',
      },
    ],
    categories: ['Бизнес'],
    comments: null,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookItem>) => ({
      ...state,
      book: action.payload,
    }),
  },
});

export const { addBook } = bookSlice.actions;

export const getApiBook = (id: string) => ({ type: GET_API_BOOK, payload: id });
export const book = bookSlice.reducer;
