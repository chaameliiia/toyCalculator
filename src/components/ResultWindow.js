import React, { useEffect } from 'react';
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
    color: #ccc;
    font-size: .8em;
    height: 35%;
    vertical-align: middle;
    width: 100%;
  }

  .calcResult {
    font-size: 1.5em;
    height: 65%;
    width: 100%;
  }
`;

const ResultWindow = ({ clickRecord, calcResult }) => {
  useEffect(() => {
    console.log(calcResult);
  }, [calcResult]);
  return (
    <ResultWindowStyled>
      <p className="clickRecord">
        {clickRecord}
      </p>
      <p className="calcResult">
        {calcResult}
      </p>     
    </ResultWindowStyled>
  );
};

export default ResultWindow;