import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header() {
  return (
    <Div>
      <LeftContainer>
        <Img src="tailwind_css.svg" />
      </LeftContainer>
      <RightContainer>
        <Heading>Docs</Heading>
        <Heading>Components</Heading>
        <Heading>Blog</Heading>
        <Heading>Showcase</Heading>
        <GitImg src="github.png
        "/>
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </RightContainer>
    </Div>
  );
}
const Div = styled.div`
display:flex;
justify-content:space-between;
width:100%;
height;30px;
padding: 25px 35px 30px 40px 
`;
const Img = styled.img`
  width: 11rem;
`;
const GitImg=styled.img`
width:28px`;
const LeftContainer = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
const RightContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  
`;
const Heading = styled.div`
  font-weight: 600;
  line-height: 1.5rem;
`;
