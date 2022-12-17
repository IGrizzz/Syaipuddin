import styled from "styled-components";
import boxWork from "./Assets/box-work.png";

const Box = styled.div`
font-family : OpenSansBold;
width : 595px;
height : 506px;
background : url(${boxWork}) no-repeat;
background-size : 595px 506px;
display : flex;
flex-direction : column;
@media only screen and (max-width : 580px){
    width : 343px;
    height : 290px;
    background-size: 343px 290px;
}
`
const WorkText = styled.h1`
font-size: 36px;
padding-left: 140px;
@media only screen and (max-width : 580px){
    font-size : 20px
}
`
const Work1 = styled.div`
padding-left 60px;  
`
const Work2 = styled.div`
padding-left 60px;
`
const Year = styled.p`
font-size : 20px;
height:6px;
@media only screen and (max-width : 580px){
    font-size : 12px;
}
`

const Role = styled.p`
font-size : 20px;
height : 6px;
font-style: italic;
@media only screen and (max-width : 580px){
    font-size : 12px;
}
`
const Role1 = styled(Role)`
font-size : 20px;
height : 6px;
@media only screen and (max-width : 580px){
    font-size : 12px;
}
`

const Place = styled.p`
font-size : 36px;
height : 20px;
@media only screen and (max-width : 580px){
    font-size : 20px;
    height : 8px;
}
`

const Place1 = styled(Place)`
height : 70px;
@media only screen and (max-width : 580px){
    height : 32px;
}`

function Work (){
return(
    <>
        <Box>
            <WorkText>Work Exprience</WorkText>
            <Work1>
                <Place>BUMDesa Sayurmatua</Place>
                <Role>intern</Role>
                <Year>Feb. 2022 - May 2022</Year>
            </Work1>
            <Work2>
                <Place1>Computational Physics Laboratory</Place1>
                <Role>Universitas Sumatera Utara</Role>
                <Role1>Laboratory Coordinator</Role1>
                <Year>Aug. 2021 - Present</Year>
            </Work2>
        </Box>
    </>
)
}

export default Work;