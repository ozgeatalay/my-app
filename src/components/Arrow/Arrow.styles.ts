
import styled from 'styled-components';
import colors from '../Theme/theme';

const {BLACK} = colors

export const StyledArrow = styled.div`
width: 15px;
display: flex;
align-items: center;
margin-top: 2px;
margin-left: 3px;
`


export const Line = styled.div`
width:15px;
background: ${BLACK};
height:2px;
display:flex;
`


export const Point = styled.div`
border-top: 4px solid transparent;
border-bottom: 4px solid transparent;
border-left: 4px solid ${BLACK};
display: flex;
`