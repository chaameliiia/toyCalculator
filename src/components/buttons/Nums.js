import React from 'react';
import styled from 'styled-components';

const NumStyled = styled.div`
  width: 75%;

  button {
    width: 33.3%;
  }

  .number {
    background: #fff;
    
    &:hover {
      background: #333;
      color: #fff;
    }

    &:active {
      background: #444;
    }
  }

  .zero {
    width: 66.6%;
  }

  .total {
    background: #eee;

    &:hover {
      background: #333;
      color: #fff;
    }

    &:active {
      background: #444;
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
];

const Nums = ({ clickBtn, clickSubmit }) => {
  return (
    <NumStyled className="num">
      {nums.map(v => {
        return (
          <button
            key={v.id}
            type="button"
            onClick={clickBtn}
            className={`number ${v.eng}`}
          >
            {v.num}
          </button>
        )
      })}
      <button
        type="submit"
        onClick={clickSubmit}
        className="total"
      >
        =
      </button>
    </NumStyled>
  );
};

export default Nums;