import { Suspense } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { PathsToPage } from './core/constants';
import { Books, Contract, Manual } from './pages/main-page/sub-pages';
import { Pages } from './layout';
import { BookPage, MainPage } from './pages';

export const App = () => (
  <Suspense fallback='Loading...'>
    <Router>
      <Routes>
        <Route path={PathsToPage.Main} element={<Pages />}>
          <Route element={<MainPage />}>
            <Route>
              <Route index={true} element={<Navigate to={PathsToPage.BooksAll} replace={true} />} />
              <Route path={PathsToPage.BooksAll} element={<Books />} />
              <Route path={PathsToPage.Detectives} element={<Books />} />
              <Route path={PathsToPage.Business} element={<Books />} />
              <Route path={PathsToPage.Children} element={<Books />} />
              <Route path={PathsToPage.Foreign} element={<Books />} />
              <Route path={PathsToPage.History} element={<Books />} />
              <Route path={PathsToPage.Classic} element={<Books />} />
              <Route path={PathsToPage.Psychology} element={<Books />} />
              <Route path={PathsToPage.Computer} element={<Books />} />
              <Route path={PathsToPage.Culture} element={<Books />} />
              <Route path={PathsToPage.Science} element={<Books />} />
              <Route path={PathsToPage.Nonfiction} element={<Books />} />
              <Route path={PathsToPage.Reference} element={<Books />} />
              <Route path={PathsToPage.Fantasy} element={<Books />} />
              <Route path={PathsToPage.Humor} element={<Books />} />
            </Route>
            <Route path={PathsToPage.Manual} element={<Manual />} />
            <Route path={PathsToPage.Contract} element={<Contract />} />
          </Route>
          <Route path={PathsToPage.Book} element={<BookPage />} />
        </Route>
      </Routes>
    </Router>
  </Suspense>
);
