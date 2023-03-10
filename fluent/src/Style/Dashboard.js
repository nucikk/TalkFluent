import styled from "styled-components"

export const Container = styled.div`
 height: 100vh;
 background-color: #dbf0b5;
 overflow: hidden;
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Center = styled.div`
 width: 74%;
 overflow: hidden;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`
export const Section = styled.div`
  width: 343px;
  height: 465px;
  overflow: hidden;
  border-radius: 15px;
  background: linear-gradient(147deg, #353535 0%, #4F4F4F 39%, #DF91F2 90%);
  background-blend-mode: multiply;
  padding: 30px 40px;
  color: #ffffff;

  &:nth-child(2) {
    background: linear-gradient(147deg, #353535 0%, #4F4F4F 39%, #91F2A6 90%);
  }
  &:nth-child(3) {
    background: linear-gradient(147deg, #353535 0%, #4F4F4F 39%, #4DE3ED 90%);
  }
 `
 
export const About = styled.div`
 font-size: 39px;
 font-weight: bold;
 line-height: 44px;
 letter-spacing: 2px;
`;

export const Subtitle = styled.h3`
 font-size: 18px;
 font-weight: bold;
 margin: 70px 0px 18px;
`;

export const Button = styled.button`
 width: 133px;
 height: 37px;
 margin: 50px 0;
 padding: 8px 16px;
 background: #353535;
 color: #fff;
 border: none;
 border-radius: 1001.71px;
`;

export const Image = styled.img`
 display: flex;
 margin: -241px 113px;
`;