import { Filter } from '@assets';

import { FilterBarStyled } from '../styled';

export const FilterBar = () => (
  <FilterBarStyled>
    <Filter />
    <span>По рейтингу</span>
  </FilterBarStyled>
);
