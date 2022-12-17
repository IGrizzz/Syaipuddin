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
@media only screen and (max-width : 720px){
    display : flex;
    flex-direction : column;
    align-items : center;
    row-gap: 12px;
}
`

    ReactDOM.render(
        <React.StrictMode>
            <Box>
                <FontStyle />
                <Bio />
                <Portofolios />
                <Education />
                <Work />
            </Box>
        </React.StrictMode>,
        document.getElementById('root')
    )

reportWebVitals();