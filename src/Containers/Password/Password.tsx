import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { guessThePassword } from './passwordSlice.ts';


const Password = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value);
  console.log(passwordValue);

  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(guessThePassword())}>1</button>

    </div>
  );
};

export default Password;