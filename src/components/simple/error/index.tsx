import { useDispatch } from 'react-redux';
import { Action, Exclamation } from '@assets';
import { ErrorStyled } from '@components/simple/error/styled';
import { error } from '@core/constants';
import { toggleError } from '@store/reducers/books';

export const Error = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleError(false));
  };

  return (
    <ErrorStyled data-test-id='error'>
      <Exclamation />
      <h5>{error}</h5>
      <button type='button' onClick={handleClose}>
        <Action />
      </button>
    </ErrorStyled>
  );
};
