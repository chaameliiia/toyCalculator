import React, { useState, useRef } from 'react';
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
  const result = useRef(0);
  const calArr = [];
  const numArr = [];
  let textContent, idx;

  const _clickNum = e => {
    e.preventDefault();
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
  };

  const calculate = (a, b, oper) => {
    switch(oper) {
      case '+':
        result.current = a + b;
        break;
      case '-':
        result.current = a - b;
        break;
      case '*':
        result.current = a * b;
        break;
      case '/':
        result.current = a / b;
        break;
      default: break;
    }
    return result
  };

  const _clickSubmit = e => {
    e.preventDefault();
    console.log(typeof btnText);
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
    numArr.push(btnText.split(/[^0-9]/g));
    for(let i = 0; i < btnText.length; i++) {
      calArr.push(btnText.split('')[i]);
    }
    calArr.map((v, i) => {
      if(isNaN(parseInt(v))) {
        idx = i;
      }
      return idx;
    });
    calculate(parseInt(numArr[0][0]), parseInt(numArr[0][1]), calArr[idx]);
  }

  const _clickOper = e => { // calText, btnText 연산 실행
    e.preventDefault();
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
  }

  const _clickFunc = e => {
    e.preventDefault();

    const clearing = () => {
      console.log('clear');
      setBtnText('');
      result.current = 0;
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
      {/* 계산부 */}
      <ResultWindow // 출력부
        clickRecord={btnText}
        calcResult={result.current}
        className="ResultWindow"
      />
      <form
        action="/"
        id="calculator"
        method="get"
        name="calculator"
      >
        <Functions //기능 버튼
          clickFunc={_clickFunc}
        />
        <Nums // 숫자 버튼
          clickBtn={_clickNum}
          clickSubmit={_clickSubmit}
        />
        <Operands
          clickBtn={_clickOper} // 연산자 버튼
        />
      </form>
    </CalculatorStyled>
  );
};

export default Calculator;