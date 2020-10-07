import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Functions from './buttons/Functions';
import Nums from './buttons/Nums';
import Operands from './buttons/Operands';
import ResultWindow from './ResultWindow';

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

      &:active {
        background: #444;
      }
    }
  }
`;

const Calculator = () => {
  const [btnText, setBtnText] = useState('');
  const [result, setResult] = useState('');

  const _clickBtn = e => {
    e.preventDefault();
    setBtnText(btnText + e.target.textContent);
  };

  const _clickSubmit = e => {
    e.preventDefault();
    setResult(btnText.split(''));
    console.log(result);
  }



  return (
    <CalculatorStyled>
      <ResultWindow
        clickRecord={btnText}
        className="ResultWindow"
      />
      <form
        action="/"
        id="calculator"
        method="get"
        name="calculator"
        onSubmit={_clickSubmit}
      >
        <Functions
          clickRecord={btnText}
          clickBtn={_clickBtn}
          className="functions"
        />
        <Nums
          clickBtn={_clickBtn}
          clickSubmit={_clickSubmit}
          className="num"
        />
        <Operands
          clickBtn={_clickBtn}
          className="operands"
        />
      </form>
    </CalculatorStyled>
  );
};

export default Calculator;