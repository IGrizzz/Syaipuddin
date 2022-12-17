import styled from "styled-components";
import boxPorto from "./Assets/box-porto.png";
import btnPorto from "./Assets/box-bttn.png";


const Box = styled.div`
width : 595px;
height : 290px;
background : url(${boxPorto}) no-repeat;
background-size : 595px 290px;
font-family : OpenSansBold;
display : flex;
flex-direction : column;
align-items : center;
row-gap: 12px;
@media only screen and (max-width : 580px){
    width : 343px;
    height : 183.89px;
    background-size : 343px 183.89px;
    row-gap : 8px;
}
`

const PortoText = styled.h1`
padding-left : 140px;
padding-top : 0px;
font-size: 36px;
align-self : start;
justify-self : start;
@media only screen and (max-width : 580px){
    padding-left : 80px;
    font-size : 20px;
    height : 2px;
}
`
const PortoBox = styled.div`
width : 503px;
height : 104px;
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
column-gap : 4px;

`

const Sayurmatua = styled.a`
font-family : OpenSansBold;
color : black;
font-size : 20px;
text-align : center;
width : 150px;
height : 99px;
cursor : pointer;
background : url(${btnPorto}) no-repeat;
border : none;
text-decoration : none;
background-size : 150px 99px;
display: flex;
align-items : center;
@media only screen and (max-width : 580px){
    width : 83.35px;
    height : 59.95px;
    background-size : 83.35px 59.95px;
    font-size : 12px;
}

`

const SICovid = styled.a`
font-family : OpenSansBold;
color : black;
font-size : 20px;
text-align : center;
width : 150px;
height : 99px;
cursor : pointer;
background : url(${btnPorto}) no-repeat;
border : none;
text-decoration : none;
background-size : 150px 99px;
display: flex;
align-items : center;
justify-content: center;
@media only screen and (max-width : 580px){
    width : 83.35px;
    height : 59.95px;
    background-size : 83.35px 59.95px;
    font-size : 12px;
}
`
const Sevenphone = styled.a`
font-family : OpenSansBold;
color : black;
font-size : 20px;
width : 150px;
height : 99px;
cursor : pointer;
background : url(${btnPorto}) no-repeat;
border : none;
text-decoration : none;
background-size : 150px 99px;
display: flex;
align-items : center;
justify-content: center;
padding-left : 2px;
@media only screen and (max-width : 580px){
    width : 83.35px;
    height : 59.95px;
    background-size : 83.35px 59.95px;
    font-size : 12px;
}
`

function Portofolios (){
return(
    <>
        <Box>
            <PortoText>
                Portofolios
            </PortoText>
            <PortoBox>
                <Sayurmatua href="https://sayurmatua.netlify.app">
                    Sayurmatua Website
                </Sayurmatua>
                <SICovid href="SayurmatuaBox>">
                    SICovid
                </SICovid>
                <Sevenphone href="https://sevenphones.netlify.app">
                    Sevenphone
                </Sevenphone>
            </PortoBox>
        </Box>
    </>
)
}

export default Portofolios;