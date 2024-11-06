import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { guessThePassword } from './passwordSlice.ts';

const buttonSymbols:string[] = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '<', '0', 'E'];

const Password = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value);

  const dispatch = useDispatch();

  return (
    <div className="door">
      <div className="display-box">{passwordValue}</div>
      <div className="buttons">
        {buttonSymbols.map((symbol) => (
          <button key={symbol} type="button" onClick={() => dispatch(guessThePassword(`${symbol}`))}>{symbol}</button>
        ))}
      </div>
    </div>
  );
};

export default Password;