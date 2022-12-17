import React from "react";
import ReactDOM from "react-dom";
import Bio from "./Bio.js";
import reportWebVitals from './reportWebVitals';
import OpenSans from './Fonts/OpenSans/OpenSans-Regular.ttf'
import OpenSansBold from './Fonts/OpenSans/OpenSans-Bold.ttf'
import { createGlobalStyle } from "styled-components";
import Portofolios from "./Portofolios.js";
import Education from "./Education.js";
import Work from "./Work.js";
import styled from "styled-components"

const FontStyle = createGlobalStyle` 
@font-face {
  font-family: 'OpenSans';
  src: url(${OpenSans}) format('truetype');
};
font-family: OpenSans;
caret-color: transparent !important;

@font-face {
    font-family: 'OpenSansBold';
    src: url(${OpenSansBold}) format('truetype');
  };
  font-family: OpenSansBold;
  caret-color: transparent !important;`

const Box = styled.div`
display : flex;
flex-direction : row-reverse;
justify-content : center;
align-items : center;
column-gap: 32px;
@media only screen and (max-width : 720px){
    display : flex;
    flex-direction : column;
    align-items : center;
    row-gap: 12px;
}
`

const Box1 = styled.div`
display : flex;
flex-direction : column;
row-gap:32px;
`

    ReactDOM.render(
        <React.StrictMode>
            <FontStyle />
            <Bio />
            <Box>
                <Box1>
                    <Portofolios />
                    <Education />
                </Box1>
                <Work />
            </Box>
        </React.StrictMode>,
        document.getElementById('root')
    )

reportWebVitals();