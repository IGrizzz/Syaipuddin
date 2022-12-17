import styled from "styled-components";
import boxEdu from "./Assets/box-edu.png"


const Box = styled.div`
width : 595px;
height : 280px;
background : url(${boxEdu}) no-repeat;
background-size : 595px;
height : 280px;
font-family : OpenSansBold;
display : flex;
flex-direction : column;
`

const EduText = styled.h1`
font-size: 36px;
padding-left: 140px;S
}
`

const EduDesc = styled.div`
display: flex;
flex-direction : column;
row-gap :0px;
padding-left : 60px;
`

const University = styled.h1`
font-size : 32px;
height : 2px;
`

const Major = styled.h2`
font-size : 20px;
height : 5px;

`

const Year = styled.p`
font-size: 20px;
height : 1px;
`

function Education (){
    return(
        <>
            <Box>
                <EduText>
                    Education
                </EduText>
                <EduDesc>
                    <University>Universitas Sumatera Utara</University>
                    <Major>Bachelor Degree at Physics</Major>
                    <Year>2019-2023 (expected)</Year>
                </EduDesc>
            </Box>      
        </>
    )
}

export default Education;