import React from 'react';
import styled from 'styled-components';

const OperStyled = styled.div`
  width: 25%;

  button {
    background: #eee;
    width: 100%;

    &:hover {
      background: #333;
      color: #fff;
    }

    &:active {
      background: #444;
    }
  }
`;

const symbols = [
  {
    id: 0,
    eng: 'plus',
    sym: '+',
  },
  {
    id: 1,
    eng: 'minus',
    sym: '-',
  },
  {
    id: 2,
    eng: 'times',
    sym: '*',
  },
  {
    id: 3,
    eng: 'devide',
    sym: '/',
  },
];

const Operands = ({ clickBtn }) => {
  return (
    <OperStyled className="operands">
      {symbols.map(v => {
        return (
          <button
            key={v.id}
            type="submit"
            onClick={clickBtn}
            className={v.eng}
          >
            {v.sym}
          </button>
        )
      })}
    </OperStyled>
  );
};

export default Operands;