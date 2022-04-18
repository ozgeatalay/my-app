import React from 'react';
import './App.css';
import styled from 'styled-components';

import {MagicTable} from './components/Table/Table';
import {Chart} from './components/Chart/Chart';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100vh;

    
`;

const FlexibleDiv = styled.div`
    display: flex;
    align-items: flex-start;
    width: 970px;
    justify-content: space-between;
`;

const TableWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: flex-start;
`;

function App() {
  return (
      <Container>
   <FlexibleDiv>
   <Chart/>
   <TableWrapper>
   <MagicTable/>
   </TableWrapper>
   </FlexibleDiv>
        
      </Container>
  );
}

export default App;
