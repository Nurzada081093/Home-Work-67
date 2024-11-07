import { buttonSymbols } from '../../Constantas.ts';
import { useDispatch, useSelector } from 'react-redux';
import { enterTheValue, getTheResult, removeTheValue, resetTheState } from './calculatorSlice.ts';
import { RootState } from '../../app/store.ts';
import ButtonChangePage from '../../Components/ButtonChangePage/ButtonChangePage.tsx';

const BUTTON_NUMBERS: string[] = buttonSymbols;

const Calculator = () => {
  const userValue: string = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch();

  return (
    <div className="calculator-page">
      <ButtonChangePage text="Password page"/>
      <div className="door">
        <p className="title">Calculator</p>
        <div className="display-box">{userValue}</div>
        <div className="buttons">
          {BUTTON_NUMBERS.map((number: string) => (
            <button className="custom-btn btn-3" key={number} type="button"
                    onClick={() => dispatch(enterTheValue(number))}><span>{number}</span></button>
          ))}
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(enterTheValue('+'))}><span>+</span>
          </button>
          <button className="custom-btn btn-3" type="button" onClick={() => dispatch(enterTheValue('0'))}><span>0</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(enterTheValue('-'))}><span>-</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(enterTheValue('*'))}><span>*</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(enterTheValue('/'))}><span>/</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(removeTheValue())}>
            <span>{'<'}</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(getTheResult())}><span>=</span>
          </button>
          <button className="custom-btn btn-7" type="button" onClick={() => dispatch(resetTheState())}><span><img
            style={{marginTop: '10px'}}
            width="30"
            height="30"
            src="https://img.icons8.com/android/50/FFFFFF/recurring-appointment.png"
            alt="recurring-appointment"/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;