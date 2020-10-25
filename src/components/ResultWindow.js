import React, { useEffect } from 'react';
import styled from 'styled-components';

const ResultWindowStyled = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  overflow: hidden;
  padding: .5rem;
  text-align: right;
  width: 100%;

  .calcResult {
    font-size: 1.5em;
    height: 80px;
    padding-top: 1.2rem;
  }
`;

const ResultWindow = ({ calcResult }) => {
  useEffect(() => {
  }, [calcResult]);

  return (
    <ResultWindowStyled>
      <p className="calcResult">
        {calcResult}
      </p>     
    </ResultWindowStyled>
  );
};

export default ResultWindow;