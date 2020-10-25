import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Functions from './buttons/Functions';
import Nums from './buttons/Nums';
import Operands from './buttons/Operands';
import ResultWindow from './ResultWindow';

const CalculatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 65%;

  .clickRecord {
    background: transparent;
    border: none;
    color: #ccc;
    font-size: .8em;
    left: 0;
    outline-style: none;
    padding-right: .7rem;
    padding-top: .7rem;
    position: absolute;
    top: 0;
    text-align: right;
    width: 100%;
  }
  
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
  const [result, setResult] = useState(0);
  let operA = useRef('');
  let operB = useRef('');
  let newText = useRef('');
  let bln = useRef(false);
  let numClicked = useRef(false);
  let operClicked = useRef(false);
  let textContent;

  const calculate = (operB, result, newNum) => {
    // 이전 결과값, 새 입력값 연산 함수
    switch(operB) {
      case '+':
        setResult(result + newNum);
        break;
      case '-':
        setResult(result - newNum);
        break;
      case '*':
        newText.current = 1;
        setResult(result * newNum);
        break;
      case '/':
        newText.current = 1;
        setResult(result / newNum);
        break;
      default: 
        setResult(btnText);
        break;
    }
    return result;
  };

  const _changeValue = e => { // 키보드로 숫자 입력할 때
    console.log(typeof e.target.keyCode);
    setBtnText(e.target.value);
  }

  const _clickNum = e => { // 숫자 버튼 클릭할 때
    e.preventDefault();
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
    newText.current += textContent;
    bln.current = false;
    numClicked.current = true;
  };

  const _clickSubmit = e => { // = 버튼 클릭할 때
    e.preventDefault();
    textContent = e.target.textContent;
    calculate(operB.current, Number(result), Number(newText.current));
    setBtnText('');
    operA.current = '';
    operB.current = '';
    bln.current = false;
  };

  const _clickOper = e => { // 연산자 버튼 클릭할 때
  // b=true
    let newBtnTxt = btnText;
    e.preventDefault();
    textContent = e.target.textContent;
    if(btnText === '') { // 연산할 숫자 없을 경우
      return;
    }
    if(operB.current === textContent) { // 같은 연산자 연속으로 클릭한 경우
      operClicked.current = true;

      if(numClicked === true && operClicked === true) {
        return;
      }
    }
    
    if(bln.current) { // 기존 연산자 다른 연산자로 덮어쓰기
      newBtnTxt = newBtnTxt.slice(0, newBtnTxt.length - 1);
      // 마지막 연산자 1개 제거
    } else {
      bln.current = true;
    }

    setBtnText(newBtnTxt + textContent);
    operA.current = textContent;
    calculate(operB.current, Number(result), Number(newText.current));
    operB.current = operA.current; // 현재 연산자를 다음 연산자로
    newText.current = '';
  };

  const _clickFunc = e => { // 기능 버튼 클릭할 때
    e.preventDefault();

    const clearing = () => { // 전체 값 초기화
      const clickRecord = document.querySelector('.clickRecord');
      console.log(clickRecord);
      setResult(0);
      operA.current = '';
      operB.current = '';
      bln.current = false;
    };

    const erasing = () => { // 마지막 한 글자 지우기
      setBtnText(btnText.slice(0, btnText.length - 1));
      newText.current = newText.current.slice(0, newText.current.length - 1);
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
      <input
        autoFocus
        value={btnText}
        type="text"
        onChange={_changeValue}
        className="clickRecord"
      />
      <ResultWindow // 출력부
        calcResult={result}
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