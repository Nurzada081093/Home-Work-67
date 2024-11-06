import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { enterThePassword, removeThePassword, checkThePassword, resetThePassword } from './passwordSlice.ts';

const buttonSymbols:string[] = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];

const Password = () => {
  const passwordValue: string = useSelector((state: RootState) => state.password.value);
  const backgroundColor: string = useSelector((state: RootState) => state.password.displayColor);
  const result:string = useSelector((state: RootState) => state.password.resultText);

  const dispatch = useDispatch();

  let passwordSymbol: string = '';

  for (let i = 0; i < passwordValue.length; i++) {
    passwordSymbol += '*';
  }

  return (
    <div className="door">
      {result === '' ? <div className="display-box">{passwordSymbol}</div> :
        <div className="display-box" style={{backgroundColor: `${backgroundColor}`}}>{result}</div>
      }
      <div className="buttons">
        {buttonSymbols.map((symbol) => (
          <button className="custom-btn btn-3" key={symbol} type="button" onClick={() => dispatch(enterThePassword(`${symbol}`))}><span>{symbol}</span></button>
        ))}
        <button className="custom-btn btn-7" type="button" onClick={() => dispatch(removeThePassword())}><span>{'<'}</span></button>
        <button className="custom-btn btn-3" type="button" onClick={() => dispatch(enterThePassword(`0`))}><span>0</span></button>
        <button className="custom-btn btn-7" type="button" onClick={() => dispatch(checkThePassword())}><span>E</span></button>
        <button className="custom-btn btn-7" type="button" onClick={() => dispatch(resetThePassword())}><span><img
          style={{marginTop: '10px'}}
          width="30"
          height="30"
          src="https://img.icons8.com/android/50/FFFFFF/recurring-appointment.png"
          alt="recurring-appointment"/></span>
        </button>
      </div>
    </div>
  );
};

export default Password;