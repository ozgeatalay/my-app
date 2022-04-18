import { Arrow } from '../Arrow/Arrow';
import {CUSTOMCHART, YAXIS, XAXIS, CHARTLABELCONTAINER, LABEL, LABELCONTAINER }  from './Chart.styles';



export const Chart = () => {

  return (
    <CUSTOMCHART>
      <YAXIS>
      <span>Ability to execute</span> <Arrow/>
      </YAXIS>
    <XAXIS>
     <span> Completeness of vision</span> <Arrow/>
    </XAXIS>
  <LABELCONTAINER>
  <LABEL>
    <CHARTLABELCONTAINER>
      Challengers
    </CHARTLABELCONTAINER>
    <CHARTLABELCONTAINER>
    Leaders
    </CHARTLABELCONTAINER>
    </LABEL>
    <LABEL>
    <CHARTLABELCONTAINER>
      Niche Players
    </CHARTLABELCONTAINER>
    <CHARTLABELCONTAINER>
    Visionaries
    </CHARTLABELCONTAINER>
    </LABEL>
  </LABELCONTAINER>
    </CUSTOMCHART>
  );
}