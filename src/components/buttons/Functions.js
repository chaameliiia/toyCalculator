import React from 'react';
import styled from 'styled-components';

const FuncStyled = styled.div`
  width: 100%;

  button {
    background: #eee;

    &:hover {
      background: #333;
      color: #fff;
    }

    &:active {
      background: #444;
    }
  }
  
  .clear {
    width: 50%;
  }

  .erase {
    width: 50%;
  }
`;

const Functions = ({ clickRecord }) => {
  const clickFunc = e => {
    console.log(clickRecord);
    switch(e.target.className) {
      case 'clear':
        console.log('clear');
        break;
      
      case 'erase':
        console.log('erase');
        break;

      default: return;
    }
  };

  return (
    <FuncStyled
      onClick={clickFunc}
    >
      <button
        type="button"
        className="clear"
      >
        CE
      </button>
      <button
        type="button"
        className="erase"
      >
        ⬅
      </button>
    </FuncStyled>
  );
};

export default Functions;