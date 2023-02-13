import { ChangeEvent, useEffect } from 'react';

import { InputX, Search } from '../../../../../../assets';
import { localKeyText, searchTextDef } from '../../../../../../core/constants';
import { SearchBarProps } from '../../../../../../core/types';
import { SearchBarBtnStyled, SearchBarStyled } from '../styled';

export const SearchBar = ({ setSearchText, text, visible, setVisible }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    setSearchText(value === '' ? searchTextDef : value);
  };

  useEffect(
    () => () => {
      localStorage.setItem(localKeyText, text === '' ? searchTextDef : text);
    },
    [text]
  );

  return (
    <SearchBarStyled active={visible}>
      <Search onClick={setVisible} data-test-id='button-search-open' />
      <input type='search' placeholder={text} onChange={handleChange} data-test-id='input-search' />
      <SearchBarBtnStyled active={visible} onClick={setVisible} data-test-id='button-search-close'>
        <InputX />
      </SearchBarBtnStyled>
    </SearchBarStyled>
  );
};
