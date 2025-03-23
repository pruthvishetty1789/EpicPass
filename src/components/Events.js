import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const events = [
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.O0QO4dIb2YqDjzGJwhcp4AHaHa&pid=Api&P=0&h=180",
    name: "Live Music Concert",
    date: "2025-04-15",
    location: "Mumbai",
    price: 20,
  },
  {
    img: "https://149399705.v2.pressablecdn.com/wp-content/uploads/2022/01/CN_Logo-scaled.jpg",
    name: "Comedy Night",
    date: "2025-04-20",
    location: "Delhi",
    price: 15,
  },
];

const Events = () => {
  return (
    <Container className="mt-4">
      <h2>Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={event.img} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  📅 {event.date} <br />
                  📍 {event.location} <br />
                  💲 {event.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
