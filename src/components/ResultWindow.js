import React from 'react';
import styled from 'styled-components';

const ResultWindowStyled = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  height: 100px;
  padding: .5rem;
  text-align: right;
  width: 100%;

  .clickRecord {
    border: 1px solid #fff;
    height: 35%;
    vertical-align: middle;
    width: 100%;
  }

  .result {
    border: 1px solid #ff0;
    height: 65%;
    width: 100%;
  }
`;

const ResultWindow = ({ clickRecord }) => {
  return (
    <ResultWindowStyled>
      <p className="clickRecord">
        {clickRecord}
      </p>
      <p className="result">
      
      </p>     
    </ResultWindowStyled>
  );
};

export default ResultWindow;