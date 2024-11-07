import './ButtonChangePage.css';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

interface Props {
  text: string;
  page?: boolean;
}

const ButtonChangePage: React.FC<Props> = ({text, page}) => {
  const navigate = useNavigate();

  const clickToTheButton = () => {
    if (page) {
      navigate('/calculator');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="box-1" onClick={clickToTheButton}>
        <span className="btn btn-one">
          <span>{text}</span>
        </span>
      </div>
    </>
  );
};

export default ButtonChangePage;