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
  const [btnText, setBtnText] = useState(''); // 현재 입력값
  const [calText, setCalText] = useState(''); // 이전 입력값
  const [operA, setOperA] = useState(''); // ex operand
  const [operB, setOperB] = useState(''); // current operand
  // const [result, setResult] = useState(0); // 현재 결과

  const _clickNum = e => {
    let textContent = e.target.textContent;
    e.preventDefault();
    setBtnText(parseInt(btnText + textContent));
    // console.log('clickNum_btnText::', btnText);
  };

  const _clickSubmit = e => {
    e.preventDefault();
    // console.log(result);
  }

  const _clickOper = (e) => { // calText, btnText 연산 실행
    setOperA(e.target.textContent); 
    let result = 0;
    e.preventDefault();
    // setOperB(textContent); // 현재 클릭한 연산자 // -
    console.log(operA,'operandA');
    console.log(operB,'operandB');

    switch (operB){ // 이전 연산자를 받아서 switch문으로 각 operand에 따라 계산되도록
    case '+':
      // console.log('+입니다')
      result = (parseInt(btnText) + parseInt(calText)); // 123 + 456
      // console.log(result,'+일떄의 값입니다')
      // function call (btnText,calText){

      //   result = A+B;
      // }
      // call();
      break;
    case '-':
      result = parseInt(btnText) - parseInt(calText); 
      break;
    case '*':
      result = parseInt(btnText) * parseInt(calText); 
      break;
    case '/':
      result = parseInt(btnText) / parseInt(calText);
      break;
    // case '=':
    //   break;
    default :
      result = parseInt(btnText);
      break;
    }
    
    setCalText(parseInt(result)) // 이전에 연산한 값
    // setResult(result)
    setOperB(operA) // -
  }

  const _clickFunc = e => {
    e.preventDefault();

    const clearing = () => {
      console.log('clear');
      setBtnText('');
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