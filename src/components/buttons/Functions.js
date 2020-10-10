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

const Functions = ({ clickFunc }) => {
  return (
    <FuncStyled
      className="functions"
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