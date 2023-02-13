import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { InputX, Search } from '@assets';
import { searchTextDef } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { SearchBarProps } from '@core/types';
import { changeText } from '@store/reducers/form';

import { SearchBarBtnStyled, SearchBarStyled } from '../styled';

export const SearchBar = ({ visible, setVisible }: SearchBarProps) => {
  const text = useAppSelector((state) => state.form.text);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    dispatch(changeText(value === '' ? searchTextDef : value));
  };

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
