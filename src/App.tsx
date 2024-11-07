import './App.css';
import Password from './Containers/Password/Password.tsx';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Containers/Calculator/Calculator.tsx';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Password/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </>
  );
};

export default App;
