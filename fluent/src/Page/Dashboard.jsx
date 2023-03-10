import React, { useState } from 'react'
import { Container, Center, Section, About, Subtitle, Button, Image } from "../Style/Dashboard.js"
import BackIcone from "../Image/Button_back.svg"
import NextIcone from "../Image/Button_next.svg"
import {events} from "../Components/EventsData"

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Container>
        <Center>
          <img src={BackIcone} alt="Back Icon" onClick={() => setCurrentIndex(currentIndex - 1)} />
          {events.map((event, index) => {
            if (index % 3 === currentIndex % 3) {
              return (
                <Section key={event.id}>
                  <h2 className={`title title-${index + 1}`}>{event.lecturer}</h2>
                  <About> Learn about <p>{event.about}</p> </About>
                  <Subtitle>{event.subtitle}</Subtitle>
                  <p>{event.price}</p>
                  <Button>{event.details}</Button>
                  <Image src={event.userImg} alt="User" />
                </Section>
              );
            } else {
              return null;
            }
          })}
          <img src={NextIcone} alt="Next Icon" onClick={() => setCurrentIndex(currentIndex + 1)} />
        </Center>
      </Container>
    </>
  )
}
export default Dashboard