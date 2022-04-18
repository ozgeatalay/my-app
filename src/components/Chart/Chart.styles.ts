import colors from '../Theme/theme';
import styled from 'styled-components'

const {DARK_GREY, LIGHT_BLUE, WHITE} = colors

interface IChart {

  }
  
export const CUSTOMCHART = styled.div<IChart>`
width: 400px;
height: 400px;
border: 2px solid ${DARK_GREY};
position:relative;
`

export const YAXIS = styled.div`
position: absolute;
bottom: 55px;
transform: rotate(-90deg);
left:-75px;
font-size: 13px;
display: flex;
`
export const XAXIS = styled.div`
position: absolute;
bottom: -18px;
font-size: 13px;
display: flex;
`

export const CHARTLABELCONTAINER = styled.div`
background: ${LIGHT_BLUE};
color: ${WHITE};
padding: 2px 8px;
font-size: 14px;
font-family: sans-serif;
border-radius: 4px;
`

export const LABELCONTAINER = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const LABEL = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0;
`



