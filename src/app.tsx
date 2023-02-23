import { Suspense } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { PathsToPage } from '@core/constants';
import { Pages } from '@layout';
import { BookPage, MainPage } from '@pages';
import { Books, Contract, Manual } from '@pages/main-page/sub-pages';

export const App = () => (
  <Suspense fallback='Loading...'>
    <Router>
      <Routes>
        <Route path={PathsToPage.Main} element={<Pages />}>
          <Route element={<MainPage />}>
            <Route>
              <Route index={true} element={<Navigate to={PathsToPage.BooksAll} replace={true} />} />
              <Route path={PathsToPage.Books} element={<Books />} />
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
