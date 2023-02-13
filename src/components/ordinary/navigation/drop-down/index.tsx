import { DropDownLink } from './drop-down-link';
import { DropDownName } from './drop-down-name';
import { DropDownProp } from './prop';
import { DropDownStyled } from './styled';

export const DropDown = ({ name, links, isActive, burger, handleClick }: DropDownProp) => (
  <DropDownStyled>
    <DropDownName name={name} setIsOpen={handleClick} isOpen={isActive} burger={burger} />
    <DropDownLink link={links} burger={burger} isOpen={isActive} />
  </DropDownStyled>
);
