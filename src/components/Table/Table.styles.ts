import styled from 'styled-components';
import colors from '../Theme/theme';

const {WHITE, LIGHT_BLUE} = colors

interface ITableTH {
    tableHeadWidth: string
  }
  
export const Table = styled.table`
padding-top: 3px
`;


export const TableTH = styled.th<ITableTH>`
color: ${WHITE};
background: ${LIGHT_BLUE};
font-size: 13px;
padding: 2px 0;
border-radius: 4px;
font-family: sans-serif;
width:${props => props.tableHeadWidth}
`

