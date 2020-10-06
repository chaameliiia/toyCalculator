import React from 'react';
import styled from 'styled-components';

const TotalWindowStyled = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  height: 100px;
  width: 100%;
`;

const TotalWindow = ({ result }) => {
  let clickRecord = result;
  clickRecord += result;
  console.log(clickRecord);

  return (
    <TotalWindowStyled>
    {clickRecord}
    </TotalWindowStyled>
  );
};

export default TotalWindow;