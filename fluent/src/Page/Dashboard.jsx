import React from 'react'
import styled from "styled-components"


const Container = styled.div`
 height: 100vh;
 background-color: #dbf0b5;
 overflow: hidden;
 display: flex;
 justify-content: center;
 align-items: center;
`
const Center = styled.div`
 width: 70%;
 overflow: hidden;
 background-color: #acf7ff;
`
const Section = styled.div`
  width: 393px;
  height: 457px;
  background: linear-gradient(135deg, #353535 0%, #4F4F4F 39%, #DF91F2 100%);
background-blend-mode: multiply;
             `
const Dashboard = () => {
  return (
    <>
      <Container>
        <Center>
          <Section>
            
          </Section>
        </Center>
      </Container>
    </>
  )
}

export default Dashboard
