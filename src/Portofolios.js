import styled from "styled-components";
import boxPorto from "./Assets/box-porto.png";
import btnPorto from "./Assets/box-bttn.png";


const Box = styled.div`
width : 595px;
height : 330px;
background : url(${boxPorto}) no-repeat;
background-size : 595px 319px;
font-family : OpenSansBold;
display : flex;
flex-direction : column;
align-items : center;
row-gap: 12px;`

const PortoText = styled.h1`
padding-left : 140px;
padding-top : 0px;
font-size: 36px;
align-self : start;
justifi-self : start
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