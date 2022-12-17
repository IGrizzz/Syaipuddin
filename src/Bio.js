import profile from "./Assets/profile-picture.png";
import email from "./Assets/email.png";
import linkedin from "./Assets/linkedin.png";
import github from "./Assets/github.png";
import styled from "styled-components";

// Styling using Styled Components

const BioBox = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
@media only screen and (max-width : 720px){
  flex-direction : column;
}
`

const BioDetail = styled.div`
`

const ProfPic = styled.img`
width : 536.08px;
height : 506.4px;
@media only screen and (max-width : 720px) {
  width : 228.66px;
  height : 216px;
  justify-content : center;
}
`

const MyName = styled.p`
font-size : 46px;
font-family : OpenSans;

@media only screen and (max-width : 720px){
  font-size : 26px;
}
  @media only screen and (max-width : 580px){
    font-size : 20px;
  }
`

const EmailBox = styled.div`
display : flex;
flex-direction : row;
align-items : center;
font-family : OpenSansBold;
font-size : 24px;
column-gap: 12px;
@media only screen and (max-width : 720px) {
  font-size : 12px;
}
`

const EmailPic = styled.img`
width : 49px;
height : 36px;
@media only screen and (max-width:720px){
  width : 30px;
  height : 21.99px;
}
`

const EmailText = styled.p`

`

const LinkedinBox = styled.div`
display : flex;
flex-direction : row;
align-items : center;
font-family : OpenSansBold;
font-size : 24px;
column-gap: 12px;
@media only screen and (max-width : 720px){
  font-size : 12px;
}
`

const LinkedinPic = styled.img`
width : 49px;
height : 49px;
@media only screen and (max-width : 720px){
  width : 30.04px;
  height : 30.04px;
}
`

const LinkedinText = styled.p`
`

const GithubBox = styled.div`
display : flex;
flex-direction : row;
align-items : center;
font-family : OpenSansBold;
font-size : 24px;
column-gap: 12px;
@media only screen and (max-width : 720px){
  font-size : 12px;
}
`

const GithubPic = styled.img`
width : 49px;
height : 49px;
@media only screen and (max-width : 720px){
  width : 30.04px;
  height : 30.04px;
}
`

const GithubText = styled.p`
`

function Bio () {
  return(
    <>
      <BioBox>
          <ProfPic src={profile} />  {/* Profile Picture */}
          <BioDetail>
              <MyName> {/* Name */}
                <h1>Syaipuddin Muda Pane</h1>
              </MyName>
              <EmailBox> {/* Email */}
                <EmailPic src={email} />
                <EmailText>muda3332@gmail.com</EmailText>
              </EmailBox>
              <LinkedinBox> {/* Linkedin */}
                <LinkedinPic src={linkedin} />
                <LinkedinText>https://www.linkedin.com/in/syaipuddinmuda/</LinkedinText>
              </LinkedinBox>
              <GithubBox> {/* Github */}
                <GithubPic src={github} />
                <GithubText>https://github.com/IGrizzz</GithubText>
              </GithubBox>
          </BioDetail>
      </BioBox>
    </>
  )
}

export default Bio;