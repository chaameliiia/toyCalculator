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

const CalculatorLSH = () => {
  const [btnText, setBtnText] = useState(''); // 현재 입력값
  const [operA, setOperA] = useState(''); // 현재 연산자
  const [operB, setOperB] = useState(''); // 이전 연산자
  const [calText, setCalText] = useState(0); // 이전 입력값

  const _clickNum = e => {
    e.preventDefault();
    const textContent = btnText+e.target.textContent;
    setBtnText(parseInt(textContent));
  };
  const _clickOper = e => { // calText, btnText 연산 실행
    e.preventDefault();
    const textContent = e.target.textContent;
    setOperA(textContent);
    calculate(operB, btnText, calText);
    setOperB(operA) // 현재 연산자를 다음 연산자로 저장
  }
 const _clickFunc = e => {
    e.preventDefault();
    const clearing = () => {
      setBtnText('');
    };
    const erasing = () => {
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
  const _clickSubmit = e => {
    e.preventDefault();
  }
  const calculate = (operB, btnText, calText) => {
    const answer = btnText + calText;
    setCalText(answer); // 이전에 연산한 값
    console.log(answer,"answer")
    console.log(operB,"operB")
    console.log(btnText,"btnText")
    console.log(calText,"calText")
    return answer;
  };

  return (
    <CalculatorStyled> 
    {/* 계산부분 */}
      <ResultWindow //출력부분
        clickRecord={btnText}
        className="ResultWindow"
      />
      <form
        action="/"
        id="calculator"
        method="get"
        name="calculator"
      >
        <Functions //기능
          clickFunc={_clickFunc}
        />
        <Nums //숫자버튼
          clickBtn={_clickNum}
          clickSubmit={_clickSubmit}
        />
        <Operands
          clickBtn={_clickOper} //수식버튼
        />
      </form>
    </CalculatorStyled>
  );
};

export default CalculatorLSH;