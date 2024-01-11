import React from 'react';
import './square.css';

type SquareProps = {
  value: string | null;
  onSquareClick: any;
}

const Square: React.FC<SquareProps> = ({value, onSquareClick}) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );  
}

export default Square;