import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TotalWindow from './TotalWindow';

const CalculatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  
  form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    button {
      border: 1px solid #333;
      border-radius: 4px;
      background: none;
      height: 70px;
      outline-style: none;

      &:hover {
        background: #333;
        color: #fff;
      }
    }

    .num {
      width: 75%;

      button {
        width: 33%;
      }

      .zero {
        width: 66%;
      }

      .total {
        background: #eee;

        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }

    .calculate {
      width: 25%;

      button {
        background: #eee;
        width: 100%;

        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }
  }
`;

const nums = [
  {
    id: 0,
    eng: 'seven',
    num: 7,
  },
  {
    id: 1,
    eng: 'eight',
    num: 8,
  },
  {
    id: 2,
    eng: 'nine',
    num: 9,
  },
  {
    id: 3,
    eng: 'four',
    num: 4,
  },
  {
    id: 4,
    eng: 'five',
    num: 5,
  },
  {
    id: 5,
    eng: 'six',
    num: 6,
  },
  {
    id: 6,
    eng: 'one',
    num: 1,
  },
  {
    id: 7,
    eng: 'two',
    num: 2,
  },
  {
    id: 8,
    eng: 'three',
    num: 3,
  },
  {
    id: 9,
    eng: 'zero',
    num: 0,
  },
  {
    id: 10,
    eng: 'total',
    num: '=',
  }
];

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

const Calculator = () => {
  const [btnText, setBtnText] = useState('');

  const clickButtons = e => {
    e.preventDefault();
    setBtnText(e.target.textContent);
  };

  const clickSubmit = e => {
    e.preventDefault();
  }

  return (
    <CalculatorStyled>
      <TotalWindow
        result={btnText}
        className="totalWindow"
      />
      <form
        action="/"
        id="calculator"
        method="get"
        name="calculator"
        onSubmit={clickSubmit}
      >
        <div className="num">
          {nums.map(v => {
            return (
              <button
                key={v.id}
                type="button"
                onClick={clickButtons}
                className={v.eng}
              >
                {v.num}
              </button>
            )
          })}
        </div>
        <div className="calculate">
          {symbols.map(v => {
            return (
              <button
                key={v.id}
                type="button"
                onClick={clickButtons}
                className={v.eng}
              >
                {v.sym}
              </button>
            )
          })}
        </div>
      </form>
    </CalculatorStyled>
  );
};

export default Calculator;