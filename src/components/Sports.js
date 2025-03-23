import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const sports = [
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.-v1QNcNqzYsYnqomXMzezgHaGj&pid=Api&P=0&h=180",
    name: "Football Championship",
    date: "2025-05-10",
    location: "Brazil",
    price: 25,
  },
  {
    img: "https://img.freepik.com/premium-vector/cricket-world-cup-logo-2023-cool-logo-design-vector_697955-25.jpg?w=900",
    name: "Cricket World Cup",
    date: "2025-06-15",
    location: "Bangalore",
    price: 30,
  },
  {
    img: "https://img.freepik.com/premium-vector/tennis-icon-racket-sports-logo-game-vector-tennis-ball_279597-808.jpg?w=2000",
    name: "Mumbai Tennis Open",
    date: "2025-07-20",
    location: "Mumbai",
    price: 20,
  },
];

const Sports = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Live Sports Events</h2>
      <Row>
        {sports.map((sport, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <div className="ratio ratio-16x9">
                <Card.Img
                  variant="top"
                  src={sport.img}
                  className="w-100 h-100"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{sport.name}</Card.Title>
                <Card.Text>
                  📅 {sport.date} <br />
                  📍 {sport.location} <br />
                  💲 {sport.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;
