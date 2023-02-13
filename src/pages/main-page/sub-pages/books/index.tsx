import { useState } from 'react';

import { BookItems } from './books-items';
import { BooksNavigation } from './books-navigation';
import { config } from './config';
import { BooksStyled } from './styled';

export const Books = () => {
  const [navState, setNavState] = useState({
    isList: true,
  });

  return (
    <BooksStyled>
      <BooksNavigation setNavState={setNavState} navState={navState} />
      <BookItems data={config} display={navState} />
    </BooksStyled>
  );
};
