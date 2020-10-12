import React, { useState } from 'react';
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
  const [numFirst, setNumFirst] = useState(0);
  const [numSecond, setNumSecond] = useState(0);
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState('');
  const [countOper, setCountOper] = useState(0);
  
  const _clickNum = e => {
    e.preventDefault();
    setBtnText(btnText + e.target.textContent);
  };

  const _clickSubmit = e => {
    e.preventDefault();
    setCountOper(0);
    console.log(btnText);
  }

  const _clickOper = e => {
    const textContent = e.target.textContent;
    e.preventDefault();
    setCountOper(countOper + 1);
    setBtnText(btnText + textContent);
    setOperand(textContent);
    setNumFirst(parseInt(btnText));
    console.log('numFirst', numFirst);
    if(countOper > 0) {
      setNumSecond(numSecond + textContent);
    }
    console.log('numSecond', numSecond);
  }

  const _clickFunc = e => {
    e.preventDefault();

    const clearing = () => {
      console.log('clear');
      setBtnText('');
      setCountOper(0);
      setNumFirst(0);
      setResult(0);
    };

    const erasing = () => {
      console.log('erase');
      setBtnText(btnText.slice(0, btnText.length - 1));
    };

    switch(e.target.className) {
      case 'clear':
        clearing();
        break;

      case 'erase':
        erasing();
        break;

      default: return;
    }
  };

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
      >
        <Functions
          clickFunc={_clickFunc}
        />
        <Nums
          clickBtn={_clickNum}
          clickSubmit={_clickSubmit}
        />
        <Operands
          clickBtn={_clickOper}
        />
      </form>
    </CalculatorStyled>
  );
};

export default Calculator;