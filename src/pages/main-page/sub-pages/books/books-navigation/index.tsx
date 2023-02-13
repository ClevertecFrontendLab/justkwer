import { Fragment, MouseEvent, useState } from 'react';
import { List, Tale } from '@assets';
import { ButtonCircle } from '@components';
import { localKeyText, searchTextDef } from '@core/constants';
import { BooksNavigationProp } from '@core/types';

import { FilterBar } from './filter-bar';
import { SearchBar } from './search-bar';
import { BooksNavigationStyled } from './styled';

export const BooksNavigation = ({ setNavState, navState }: BooksNavigationProp) => {
  const getTextDef = () => localStorage.getItem(localKeyText) ?? searchTextDef;

  const [searchText, setSearchText] = useState(getTextDef());
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleClickVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
    setNavState({ isList: !navState.isList });
  };

  return (
    <BooksNavigationStyled visible={isVisible}>
      <SearchBar setSearchText={setSearchText} text={searchText} visible={isVisible} setVisible={handleClickVisible} />
      {isVisible && (
        <Fragment>
          <FilterBar />
          <ButtonCircle isActive={isActive} onClick={handleClick} dataTestId='button-menu-view-window'>
            <Tale />
          </ButtonCircle>
          <ButtonCircle isActive={!isActive} onClick={handleClick} dataTestId='button-menu-view-list'>
            <List />
          </ButtonCircle>
        </Fragment>
      )}
    </BooksNavigationStyled>
  );
};
