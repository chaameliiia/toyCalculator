import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';
import RecordWindow from './components/RecordWindow';
import 'asset/common.css';

const CalcWrapperStyled = styled.div`
  display: flex;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
`;

function App() {
  return (
    <CalcWrapperStyled className="calcWrapper">
      <Calculator />
      <RecordWindow />
    </CalcWrapperStyled>
  );
}

export default App;
