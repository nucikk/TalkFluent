import React from 'react'
import { Container, Center, Section, About, Subtitle, Button, Image } from "../Style/Dashboard.js"
import Rochelle from '../Image/rochelle_img1.png'
import Frost from '../Image/frost_Img_2.svg'
import Regina from '../Image/regina_img_3.png'
const events = [
  {
    id: 1,
    lecturer: "Rochelle Fernandez",
    about: "Learn about no-code tools",
    subtitle: "Live Event",
    price: "₹499/-",
    details: "Event Details",
    userImg: Rochelle
  },
  {
    id: 2,
    lecturer: "Shaw Frost",
    about: "Sell your first product online",
    subtitle: "Live Event",
    price: "₹499/-",
    details: "Event Details",
    userImg: Frost
  },
  {
    id: 3,
    lecturer: "Regina Phalange",
    about: "Nail your interviews",
    subtitle: "Live Event",
    price: "₹499/-",
    details: "Event Details",
    userImg: Regina
  }
];
 
const Dashboard = () => {
  return (
    <>
      <Container>
        <Center>
          {events.map((event, index) => (
            <Section key={event.id}>
              <h2 className={`title title-${index + 1}`}>{event.lecturer}</h2>
              <About> Learn about <p>{event.about}</p> </About>
              <Subtitle>{event.subtitle}</Subtitle>
              <p>{event.price}</p>
              <Button>{event.details}</Button>
              <Image src={event.userImg} alt="" />
            </Section>
          ))}
        </Center>
      </Container>
    </>
  )
}

export default Dashboard

